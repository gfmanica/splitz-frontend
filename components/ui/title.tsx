import { StyleSheet, Text } from 'react-native';

type TTitle = {
    text: string;
    variant: 'h1' | 'h2';
};

export function Title({ text, variant }: TTitle) {
    return <Text style={styles[variant]}>{text}</Text>;
}

const styles = StyleSheet.create({
    h1: {
        fontWeight: 600,
        fontSize: 28
    },
    h2: {
        fontWeight: 600,
        fontSize: 20
    }
});
