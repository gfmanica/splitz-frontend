import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';
import { colors } from '@/constants/Colors';

export default function Checkbox({
    value,
    onChange
}: {
    value: boolean;
    onChange: (value: boolean) => void;
}) {
    const [isChecked, setIsChecked] = useState(value);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
                onPress={() => {
                    setIsChecked(!isChecked);
                    onChange(!isChecked);
                }}
            >
                {isChecked && (
                    <Check size={16} color={colors.info[600]} strokeWidth={3} />
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedCheckbox: {
        backgroundColor: colors.info[100],
        borderColor: colors.info[200]
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        backgroundColor: colors.neutral[200],
        borderColor: colors.neutral[300],
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxInner: {
        width: 12,
        height: 12,
        borderRadius: 2
    }
});
