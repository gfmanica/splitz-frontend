import React, { useState } from 'react';
import { View, TextInput, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateInput({
    value,
    onChange
}: {
    value?: Date | null;
    onChange: (date: Date) => void;
}) {
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (_: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) {
            onChange(selectedDate);
        }
    };

    return (
        <View>
            <Pressable onPress={() => setShowPicker(true)}>
                <TextInput
                    value={value ? value.toLocaleDateString() : ''}
                    placeholder="Selecione uma data"
                    editable={false}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        borderRadius: 8,
                        backgroundColor: '#fff'
                    }}
                />
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleChange}
                />
            )}
        </View>
    );
}
