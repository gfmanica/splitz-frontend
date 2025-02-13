import React from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, Controller, useFieldArray, set } from 'react-hook-form';

import { colors } from '@/constants/Colors';
import { useMutation } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import Checkbox from '@/components/ui/checkbox';
import { money } from '@/util/format';
import { Bill } from '@/types/types';

type Payment = {
    idBillPayment: number;
    vlPayment: number;
    fgPayed: boolean;
    dsPerson: string;
};

type GridViewProps = {
    bill: Bill;
    setBill: (bill: Bill) => void;
};

export function GridView({ bill, setBill }: GridViewProps) {
    const { control, setValue, getValues } = useForm<Bill>({
        defaultValues: bill
    });

    const { fields } = useFieldArray({
        control,
        name: 'payments'
    });

    const { mutate } = useMutation({
        mutationFn: () => Axios.put(`/bill`, getValues()),
        onError: () => {
            Alert.alert('Falha', 'Falha ao salvar. Revertendo alteração.');
        },
        onSuccess: () => {
            Alert.alert('Sucesso', 'Conta salva com sucesso.');
            setBill(getValues());
        }
    });

    function savePayment(index: number, field: keyof Payment, newValue: any) {
        const currentPayment = getValues(`payments.${index}`);
        const oldValue = currentPayment[field];
        // Atualiza localmente (opcional se o componente já estiver controlado)
        setValue(`payments.${index}.${field}`, newValue);
        mutate();
    }

    return (
        <View>
            {/* Cabeçalho */}
            <View style={styles.headerRow}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Text style={styles.textHeader}>Pago</Text>
                </View>
                <View style={styles.column}>
                    <Text style={[{ textAlign: 'right' }, styles.textHeader]}>
                        Valor
                    </Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.textHeader}>Nome</Text>
                </View>
            </View>

            {/* Linhas do grid */}
            {fields.map((field, index) => {
                const isLast = index === fields.length - 1;

                return (
                    <View
                        key={field.id}
                        style={{
                            ...styles.headerRow,
                            ...(isLast && styles.lastRow)
                        }}
                    >
                        {/* Checkbox para fgPayed */}
                        <View style={[styles.column, styles.firstColumn]}>
                            <Controller
                                control={control}
                                name={`payments.${index}.fgPayed`}
                                render={({ field: { value, onChange } }) => (
                                    <Checkbox
                                        value={value}
                                        onChange={(newVal: boolean) => {
                                            onChange(newVal);
                                            savePayment(
                                                index,
                                                'fgPayed',
                                                newVal
                                            );
                                        }}
                                    />
                                )}
                            />
                        </View>
                        {/* Valor não editável */}
                        <View style={styles.column}>
                            <Text style={styles.valueColumnText}>
                                {money(Number(field.vlPayment.toFixed(2)))}
                            </Text>
                        </View>
                        {/* Nome editável */}
                        <View style={[styles.column]}>
                            <Controller
                                control={control}
                                name={`payments.${index}.dsPerson`}
                                render={({ field: { value, onChange } }) => (
                                    <TextInput
                                        style={styles.textInput}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={() =>
                                            savePayment(
                                                index,
                                                'dsPerson',
                                                value
                                            )
                                        }
                                    />
                                )}
                            />
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight: '700'
    },
    textInput: {
        height: '100%',
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    headerRow: {
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral[300]
    },
    firstColumn: {
        flex: 0.5,
        borderLeftWidth: 0
    },
    valueColumnText: {
        textAlign: 'right',
        color: colors.primary[400],
        fontWeight: '600',
        fontSize: 16
    },
    column: {
        flex: 1,
        padding: 8,
        borderLeftWidth: 1,
        height: 48,
        justifyContent: 'center',
        borderLeftColor: colors.neutral[300]
    },
    lastRow: {
        borderBottomWidth: 0
    }
});
