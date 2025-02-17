import { colors } from '@/constants/Colors';
import { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type TBlock = {
    children: ReactNode;
    style?: ViewProps['style'];
};

export function Block({ children, style }: TBlock) {
    return <View style={[styles.block, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    block: {
        borderRadius: 16,
        padding: 16,
        backgroundColor: colors.white,
        gap: 16
    }
});
