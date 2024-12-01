import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';
import { colors } from '@/constants/Colors';

export default function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkbox]}
                onPress={() => setIsChecked(!isChecked)}
            >
                {isChecked && (
                    <Check
                        size={16}
                        color={colors.neutral[700]}
                        strokeWidth={3}
                    />
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
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: colors.neutral[700],
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
