import React from 'react';
import { Block } from '@/components/ui/block';
import ButtonUi from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus, Minus, Trash } from 'lucide-react-native';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'tamagui';

export function PersonBlock() {
    const { control } = useFormContext<any>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'payments'
    });

    return (
        <Block>
            <View style={styles.titleTextContainer}>
                <Title variant="h2" text="Separar por pessoa" />
                <ButtonUi
                    buttonStyle={styles.titleAddButton}
                    icon={<Plus size={28} color={colors.white} />}
                    onPress={() => append({ dsPerson: '', vlPayment: 0 })}
                />
            </View>

            {fields.map((field, index) => (
                <View key={field.id} style={{ marginBottom: 16 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 16,
                            alignItems: 'center'
                        }}
                    >
                        <View style={{ gap: 8, flex: 1 }}>
                            <Text>Nome</Text>
                            <Controller
                                control={control}
                                name={`payments.${index}.dsPerson`}
                                render={({ field: { value, onChange } }) => (
                                    <TextInput
                                        style={styles.textInput}
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                        <View style={{ gap: 8, flex: 1 }}>
                            <Text>Valor</Text>
                            <Controller
                                control={control}
                                name={`payments.${index}.vlPayment`}
                                render={({ field: { value, onChange } }) => (
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.textInput}
                                        value={String(value)}
                                        onChangeText={(text) =>
                                            onChange(Number(text))
                                        }
                                    />
                                )}
                            />
                        </View>

                        <Button
                            unstyled
                            onPress={() => remove(index)}
                            icon={
                                <Trash color={colors.primary[300]} size={24} />
                            }
                        />
                    </View>
                </View>
            ))}
        </Block>
    );
}

const styles = StyleSheet.create({
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleAddButton: {
        width: 72,
        height: 34,
        borderRadius: 36
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    minusButton: {
        width: 70,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    plusButton: {
        width: 70,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    spinnerInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: colors.neutral[300],
        textAlign: 'center'
    }
});
