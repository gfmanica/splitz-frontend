import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

type TScreen = {
    children: ReactNode;
};

export function Screen({ children }: TScreen) {
    return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        gap: 16,
        padding: 16
    }
});
