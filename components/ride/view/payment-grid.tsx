import React from 'react';
import { Block } from '@/components/ui/block';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import { colors } from '@/constants/Colors';
import Checkbox from '@/components/ui/checkbox';
import { money } from '@/util/format';
import { Ride } from '@/types/types';

export function PaymentGrid({ save }: { save: () => void }) {
    const { control,setValue } = useFormContext<Ride>();
    const { fields } = useFieldArray({ control, name: 'payments' });

    function savePayment(
        index: number,
        field: keyof Ride['payments'][number],
        newValue: any
    ) {
        setValue(`payments.${index}.${field}`, newValue);
        save();
    }

    return (
        <Block>
            <View>
                <View style={styles.headerRow}>
                    <View style={[styles.column, styles.firstColumn]}>
                        <Text style={styles.textHeader}>Pago</Text>
                    </View>
                    <View style={styles.column}>
                        <Text
                            style={[{ textAlign: 'right' }, styles.textHeader]}
                        >
                            Valor
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.textHeader}>Nome</Text>
                    </View>
                </View>

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
                            <View style={[styles.column, styles.firstColumn]}>
                                <Controller
                                    control={control}
                                    name={`payments.${index}.fgPayed`}
                                    render={({
                                        field: { value, onChange }
                                    }) => (
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

                            <View style={styles.column}>
                                <Text style={styles.valueColumnText}>
                                    {money(Number(field.vlPayment.toFixed(2)))}
                                </Text>
                            </View>

                            <View style={[styles.column]}>
                                <Controller
                                    control={control}
                                    name={`payments.${index}.dsPerson`}
                                    render={({
                                        field: { value, onChange }
                                    }) => (
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
                                            placeholder="Digite o nome"
                                        />
                                    )}
                                />
                            </View>
                        </View>
                    );
                })}
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
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
    column: {
        flex: 1,
        padding: 8,
        borderLeftWidth: 1,
        height: 48,
        justifyContent: 'center',
        borderLeftColor: colors.neutral[300]
    },
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
    valueColumnText: {
        textAlign: 'right',
        color: colors.primary[400],
        fontWeight: '600',
        fontSize: 16
    },
    lastRow: {
        borderBottomWidth: 0
    }
});
