import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from './button';
import { formatDate, money } from '@/util/format';
import { colors } from '@/constants/Colors';

export default function DatePickerButton({
    value,
    onChange
}: {
    value: Date;
    onChange: (date: Date) => void;
}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(value);

    useEffect(() => setSelectedDate(value), [value]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        hideDatePicker();
        onChange(date);
    };

    return (
        <View>
            <Button
                buttonStyle={{
                    flex: 1,
                    height: 40,
                    borderWidth: 1,
                    paddingLeft: 16,
                    borderRadius: 8,
                    backgroundColor: colors.neutral[100],
                    borderColor: colors.neutral[300]
                }}
                textStyle={{ color: 'black', fontWeight: 400 }}
                onPress={showDatePicker}
                text={formatDate(selectedDate.toISOString())}
            />

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                locale="pt-BR"
                confirmTextIOS="Confirmar"
                cancelTextIOS="Cancelar"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={selectedDate}
            />
        </View>
    );
}
