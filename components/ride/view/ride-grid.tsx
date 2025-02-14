import React from 'react';
import { Block } from '@/components/ui/block';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import { colors } from '@/constants/Colors';
import { Ride } from '@/types/types';
import { Minus, Plus } from 'lucide-react-native';

export function RideGrid() {
    const { control, getValues, setValue } = useFormContext<Ride>();
    const rideData = getValues();
    const groupedPresences = rideData.groupedPresences || [];
    const payments = rideData.payments || [];

    const mutation = useMutation({
        mutationFn: () => Axios.put('/ride', getValues()),
        onError: () => console.warn('Erro ao atualizar presença.'),
        onSuccess: () => console.log('Presença atualizada com sucesso.')
    });

    function savePresence(
        rowIndex: number,
        colIndex: number,
        newValue: number
    ) {
        setValue(
            `groupedPresences.${rowIndex}.presences.${colIndex}.qtPresence`,
            newValue
        );
        mutation.mutate();
    }

    return (
        <Block>
            <ScrollView horizontal>
                <View>
                    {/* Header */}
                    <View style={styles.headerRow}>
                        <View style={[styles.column, styles.firstColumn]}>
                            <Text style={styles.textHeader}>Data</Text>
                        </View>
                        {payments.map((payment: any, colIndex: number) => (
                            <View key={colIndex} style={styles.column}>
                                <Text style={styles.textHeader}>
                                    {payment.dsPerson}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Linhas de dados */}
                    {groupedPresences.map((group: any, rowIndex: number) => {
                        const isLast = rowIndex === groupedPresences.length - 1;

                        return (
                            <View
                                key={rowIndex}
                                style={{
                                    ...styles.headerRow,
                                    ...(isLast && styles.lastRow)
                                }}
                            >
                                {' '}
                                // nova propriedade para última linha
                                <View
                                    style={[styles.column, styles.firstColumn]}
                                >
                                    <Text>
                                        {new Date(
                                            group.dtRide
                                        ).toLocaleDateString()}
                                    </Text>
                                </View>
                                {payments.map((_: any, colIndex: number) => (
                                    <View key={colIndex} style={styles.column}>
                                        <Controller
                                            control={control}
                                            name={`groupedPresences.${rowIndex}.presences.${colIndex}.qtPresence`}
                                            render={({
                                                field: { value, onChange }
                                            }) => (
                                                <View
                                                    style={
                                                        styles.spinnerContainer
                                                    }
                                                >
                                                    <TouchableOpacity
                                                        style={{
                                                            ...styles.smallButton,
                                                            borderBottomRightRadius: 0,
                                                            borderTopRightRadius: 0
                                                        }}
                                                        onPress={() => {
                                                            const newVal =
                                                                Number(value) -
                                                                    1 <
                                                                0
                                                                    ? 0
                                                                    : Number(
                                                                          value
                                                                      ) - 1;
                                                            onChange(newVal);
                                                            savePresence(
                                                                rowIndex,
                                                                colIndex,
                                                                newVal
                                                            );
                                                        }}
                                                    >
                                                        <Minus
                                                            size={16}
                                                            color={colors.white}
                                                        />
                                                    </TouchableOpacity>
                                                    <TextInput
                                                        style={
                                                            styles.spinnerInput
                                                        }
                                                        value={value?.toString()}
                                                        onChangeText={(text) =>
                                                            onChange(
                                                                Number(text)
                                                            )
                                                        }
                                                        onBlur={() =>
                                                            savePresence(
                                                                rowIndex,
                                                                colIndex,
                                                                Number(value)
                                                            )
                                                        }
                                                        keyboardType="numeric"
                                                    />
                                                    <TouchableOpacity
                                                        style={{
                                                            ...styles.smallButton,
                                                            borderBottomLeftRadius: 0,
                                                            borderTopLeftRadius: 0
                                                        }}
                                                        onPress={() => {
                                                            const newVal =
                                                                Number(value) +
                                                                1;
                                                            onChange(newVal);
                                                            savePresence(
                                                                rowIndex,
                                                                colIndex,
                                                                newVal
                                                            );
                                                        }}
                                                    >
                                                        <Plus
                                                            size={16}
                                                            color={colors.white}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        />
                                    </View>
                                ))}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
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
        width: 110, // trocado de minWidth para width
        borderLeftWidth: 0,
        paddingHorizontal: 8
    },
    column: {
        width: 110, // trocado de minWidth para width
        padding: 8,
        borderLeftWidth: 1,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: colors.neutral[300]
    },
    textHeader: {
        fontWeight: '700',
        textAlign: 'center' // nova propriedade para igualar largura ao restante da coluna
    },
    textInput: {
        height: '100%',
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    spinnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32
    },
    smallButton: {
        width: 24,
        height: 24,
        backgroundColor: colors.primary[400],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 0 // removido a margem para botões grudados no input
    },
    spinnerInput: {
        width: 40,
        height: 24,
        borderWidth: 1,
        borderColor: colors.neutral[300],
        textAlign: 'center',
        borderRadius: 0
    },
    lastRow: {
        borderBottomWidth: 0
    }
});
