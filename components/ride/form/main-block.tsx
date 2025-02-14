import React, { useState } from 'react';
import { Block } from '@/components/ui/block';
import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import { NumberField } from '@/components/ui/number-field';
import { Minus, Plus, X } from 'lucide-react-native';
import { useLocalSearchParams } from 'expo-router';
import Checkbox from '@/components/ui/checkbox';
import DateInput from '@/components/ui/date-field';
import { RideFormValues } from '@/types/types';

export function MainBlock() {
    const { id } = useLocalSearchParams();
    const {
        control,
        setValue,
        watch,
        formState: { errors }
    } = useFormContext<RideFormValues>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'payments'
    });
    const [newPerson, setNewPerson] = useState('');
    const dsRide = watch('dsRide');
    const vlRide = watch('vlRide');
    const qtRide = watch('qtRide');

    const handleAddPerson = () => {
        if (newPerson.trim() !== '') {
            append({ dsPerson: newPerson });
            setNewPerson('');
        }
    };

    return (
        <Block>
            <Title variant="h1" text={id ? 'Editar carona' : 'Nova carona'} />

            <View style={styles.field}>
                <Text>Descrição</Text>

                <Controller
                    control={control}
                    name="dsRide"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            placeholder="Digite a descrição..."
                            style={styles.textInput}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />

                {errors.dsRide?.message && (
                    <Text style={styles.errorText}>
                        {String(errors.dsRide?.message)}
                    </Text>
                )}
            </View>

            <View style={styles.field}>
                <Text>Valor da Carona (R$)</Text>

                <View style={styles.row}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() =>
                            setValue(
                                'vlRide',
                                Number(vlRide) - 1 < 0 ? 0 : Number(vlRide) - 1
                            )
                        }
                        icon={<Minus color={colors.white} />}
                    />

                    <Controller
                        control={control}
                        name="vlRide"
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
                        onPress={() => setValue('vlRide', Number(vlRide) + 1)}
                        icon={<Plus color={colors.white} />}
                    />
                </View>

                {errors.vlRide?.message && (
                    <Text style={styles.errorText}>
                        {String(errors.vlRide?.message)}
                    </Text>
                )}
            </View>

            <View style={{ flexDirection: 'row', flex: 1, gap: 16 }}>
                <View style={styles.field}>
                    <Text>Data de início</Text>

                    <Controller
                        control={control}
                        name="dtInit"
                        render={({ field: { value, onChange } }) => (
                            <DateInput
                                value={new Date(value.replace('Z', ''))}
                                onChange={(date) => {
                                    onChange(date.toISOString());
                                }}
                            />
                        )}
                    />

                    {errors.dtInit?.message && (
                        <Text style={styles.errorText}>
                            {String(errors.dtInit?.message)}
                        </Text>
                    )}
                </View>

                <View style={styles.field}>
                    <Text>Data de fim</Text>

                    <Controller
                        control={control}
                        name="dtFinish"
                        render={({ field: { value, onChange } }) => (
                            <DateInput
                                value={new Date(value.replace('Z', ''))}
                                onChange={(date) => {
                                    onChange(date.toISOString());
                                }}
                            />
                        )}
                    />

                    {errors.dtFinish?.message && (
                        <Text style={styles.errorText}>
                            {String(errors.dtFinish?.message)}
                        </Text>
                    )}
                </View>
            </View>

            <View style={styles.field}>
                <Text>Caronas por Dia</Text>

                <View style={styles.row}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() =>
                            setValue(
                                'qtRide',
                                Number(qtRide) - 1 < 0 ? 0 : Number(qtRide) - 1
                            )
                        }
                        icon={<Minus color={colors.white} />}
                    />

                    <Controller
                        control={control}
                        name="qtRide"
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
                        onPress={() => setValue('qtRide', Number(qtRide) + 1)}
                        icon={<Plus color={colors.white} />}
                    />
                </View>

                {errors.qtRide?.message && (
                    <Text style={styles.errorText}>
                        {String(errors.qtRide?.message)}
                    </Text>
                )}
            </View>

            <View style={[styles.field, styles.checkboxRow]}>
                <Text>Contar finais de semana?</Text>

                <Controller
                    control={control}
                    name="fgCountWeekend"
                    render={({ field: { value, onChange } }) => (
                        <Checkbox
                            style={{ alignItems: 'flex-end' }}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
            </View>

            <View style={styles.field}>
                <Text>Pessoas</Text>
                <View style={styles.row}>
                    <TextInput
                        placeholder="Digite o nome da pessoa..."
                        style={{
                            ...styles.textInput,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                        value={newPerson}
                        onChangeText={setNewPerson}
                    />
                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={handleAddPerson}
                        icon={<Plus color={colors.white} />}
                    />
                </View>

                {errors.payments?.message && (
                    <Text style={styles.errorText}>
                        {String(errors.payments?.message)}
                    </Text>
                )}

                <View style={styles.tagsContainer}>
                    {fields.map((field, index) => (
                        <View key={field.id} style={styles.tag}>
                            <Text style={styles.tagText}>{field.dsPerson}</Text>
                            <TouchableOpacity onPress={() => remove(index)}>
                                <X size={20} color={colors.primary[500]} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
    field: {
        gap: 8,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
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
    },
    dateField: {
        flex: 1,
        marginRight: 8
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        gap: 8
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary[100],
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 36,
        borderWidth: 1,
        borderColor: colors.primary[200]
    },
    tagText: {
        color: colors.primary[500],
        marginRight: 4
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4
    }
});
