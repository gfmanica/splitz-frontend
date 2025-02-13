import React from 'react';
import { Block } from '@/components/ui/block';
import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';
import { useFormContext, Controller } from 'react-hook-form';
import { useLocalSearchParams } from 'expo-router';
import { NumberField } from '@/components/ui/number-field';

export function MainBlock() {
    const { id } = useLocalSearchParams();
    const { control, setValue, watch } = useFormContext<any>();
    const vlBill = watch('vlBill');
    const qtPerson = watch('qtPerson');

    return (
        <Block>
            <Title variant="h1" text={id ? 'Editar conta' : 'Nova conta'} />

            <View style={{ gap: 8 }}>
                <Text>Nome</Text>
                <Controller
                    control={control}
                    name="dsBill"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            placeholder="Digite o nome da conta..."
                            style={styles.textInput}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
            </View>

            <View style={{ gap: 8 }}>
                <Text>Valor total (R$)</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() => setValue('vlBill', Number(vlBill) - 1)}
                        icon={<Minus color={colors.white} />}
                    />

                    <Controller
                        control={control}
                        name="vlBill"
                        render={({ field: { value, onChange } }) => (
                            <NumberField
                                style={styles.spinnerInput}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />

                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={() => setValue('vlBill', Number(vlBill) + 1)}
                        icon={<Plus color={colors.white} />}
                    />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text>Quantidade de pessoas</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() =>
                            setValue('qtPerson', Number(qtPerson) - 1)
                        }
                        icon={<Minus color={colors.white} />}
                    />

                    <Controller
                        control={control}
                        name="qtPerson"
                        render={({ field: { value, onChange } }) => (
                            <NumberField
                                style={styles.spinnerInput}
                                keyboardType="number-pad"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />

                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={() =>
                            setValue('qtPerson', Number(qtPerson) + 1)
                        }
                        icon={<Plus color={colors.white} />}
                    />
                </View>
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
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
