import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type TScreen = {
    children: ReactNode;
};

export function Screen({ children }: TScreen) {
    return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
    screen: {
        gap: 16,
        margin: 16
    }
});
