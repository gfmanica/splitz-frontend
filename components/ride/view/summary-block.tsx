import { colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export function SummaryBlock() {
    return (
        <View style={styles.block}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Faltam</Text>

                <Text style={styles.valueText}>R$ 54,00</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Total pago</Text>

                <Text style={styles.valueText}>R$ 14,00</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    valueText: {
        color: colors.primary[400],
        fontSize: 20,
        textAlign: 'right',
        fontWeight: 600
    },
    labelText: {
        fontSize: 16
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    block: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        bottom: 0,
        right: 0,
        left: 0,
        gap: 4,
        backgroundColor: colors.white,
        borderTopColor: colors.neutral[200],
        borderTopWidth: 1
    }
});
