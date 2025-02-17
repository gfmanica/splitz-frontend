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
import { colors } from '@/constants/Colors';
import { Ride } from '@/types/types';
import { Minus, Plus } from 'lucide-react-native';

export function RideGrid({ save }: { save: () => void }) {
    const { control, getValues } = useFormContext<Ride>();
    const rideData = getValues();
    const groupedPresences = rideData.groupedPresences || [];
    const payments = rideData.payments || [];

    return (
        <Block style={styles.limitedHeightBlock}>
            <ScrollView horizontal>
                <View style={{ flex: 1 }}>
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
                    <ScrollView>
                        {groupedPresences.map(
                            (group: any, rowIndex: number) => {
                                const isLast =
                                    rowIndex === groupedPresences.length - 1;

                                return (
                                    <View
                                        key={rowIndex}
                                        style={{
                                            ...styles.headerRow,
                                            ...(isLast && styles.lastRow)
                                        }}
                                    >
                                        <View
                                            style={[
                                                styles.column,
                                                styles.firstColumn
                                            ]}
                                        >
                                            <Text>
                                                {new Date(
                                                    group.dtRide.replace(
                                                        'Z',
                                                        ''
                                                    )
                                                ).toLocaleDateString()}
                                            </Text>
                                        </View>

                                        {payments.map(
                                            (_: any, colIndex: number) => (
                                                <View
                                                    key={colIndex}
                                                    style={styles.column}
                                                >
                                                    <Controller
                                                        control={control}
                                                        name={`groupedPresences.${rowIndex}.presences.${colIndex}.qtPresence`}
                                                        render={({
                                                            field: {
                                                                value,
                                                                onChange
                                                            }
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
                                                                            Number(
                                                                                value
                                                                            ) -
                                                                                1 <
                                                                            0
                                                                                ? 0
                                                                                : Number(
                                                                                      value
                                                                                  ) -
                                                                                  1;
                                                                        onChange(
                                                                            newVal
                                                                        );

                                                                        save();
                                                                    }}
                                                                >
                                                                    <Minus
                                                                        size={
                                                                            16
                                                                        }
                                                                        color={
                                                                            colors.white
                                                                        }
                                                                    />
                                                                </TouchableOpacity>
                                                                <TextInput
                                                                    readOnly
                                                                    style={
                                                                        styles.spinnerInput
                                                                    }
                                                                    value={value?.toString()}
                                                                />
                                                                <TouchableOpacity
                                                                    style={{
                                                                        ...styles.smallButton,
                                                                        borderBottomLeftRadius: 0,
                                                                        borderTopLeftRadius: 0
                                                                    }}
                                                                    onPress={() => {
                                                                        const newVal =
                                                                            Number(
                                                                                value
                                                                            ) +
                                                                                1 >
                                                                            rideData.qtRide
                                                                                ? rideData.qtRide
                                                                                : Number(
                                                                                      value
                                                                                  ) +
                                                                                  1;
                                                                        onChange(
                                                                            newVal
                                                                        );

                                                                        save();
                                                                    }}
                                                                >
                                                                    <Plus
                                                                        size={
                                                                            16
                                                                        }
                                                                        color={
                                                                            colors.white
                                                                        }
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                        )}
                                                    />
                                                </View>
                                            )
                                        )}
                                    </View>
                                );
                            }
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </Block>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        minHeight: 48,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral[300]
    },
    firstColumn: {
        width: 110, // trocado de minWidth para width
        flex: 0,
        borderLeftWidth: 0,
        paddingHorizontal: 8
    },
    column: {
        minWidth: 110, // trocado de minWidth para width
        flex: 1,
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
    },
    limitedHeightBlock: {
        maxHeight: 400,
        minHeight: 200,
        overflow: 'hidden'
    }
});
