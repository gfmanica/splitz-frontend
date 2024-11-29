import { colors } from '@/constants/Colors';
import { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type TBlock = {
    children: ReactNode;
    style?: ViewProps['style'];
};

export function Block({ children, style }: TBlock) {
    return (
        <View style={StyleSheet.flatten([styles.block, style])}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        margin: 16,
        borderRadius: 16,
        padding: 16,
        backgroundColor: colors.white,
        gap: 16
    }
});
