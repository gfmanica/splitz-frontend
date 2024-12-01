import Checkbox from '@/components/ui/checkbox';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function GridView() {
    return (
        <View>
            <View style={styles.headerRow}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Text style={styles.textHeader}>Pago</Text>
                </View>

                <View style={styles.column}>
                    <Text style={[{ textAlign: 'right' }, styles.textHeader]}>
                        Valor
                    </Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.textHeader}>Nome</Text>
                </View>
            </View>

            <View style={styles.headerRow}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Checkbox />
                </View>

                <View style={styles.column}>
                    <Text style={styles.valueColumnText}>R$ 32,00</Text>
                </View>

                <View style={[styles.column]}>
                    <TextInput style={styles.textInput} value="Pessoa 1" />
                </View>
            </View>

            <View style={styles.headerRow}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Checkbox />
                </View>

                <View style={styles.column}>
                    <Text style={styles.valueColumnText}>R$ 32,00</Text>
                </View>

                <View style={[styles.column]}>
                    <TextInput style={styles.textInput} value="Pessoa 2" />
                </View>
            </View>

            <View style={styles.headerRow}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Checkbox />
                </View>

                <View style={styles.column}>
                    <Text style={styles.valueColumnText}>R$ 32,00</Text>
                </View>

                <View style={[styles.column]}>
                    <TextInput style={styles.textInput} value="Pessoa 3" />
                </View>
            </View>

            <View style={[styles.headerRow, styles.lastRow]}>
                <View style={[styles.column, styles.firstColumn]}>
                    <Checkbox />
                </View>

                <View style={styles.column}>
                    <Text style={styles.valueColumnText}>R$ 32,00</Text>
                </View>

                <View style={[styles.column]}>
                    <TextInput style={styles.textInput} value="Pessoa 4" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        fontWeight: 700
    },
    textInput: {
        height: '100%',
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    headerRow: {
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral[300]
    },
    firstColumn: {
        flex: 0.5,
        borderLeftWidth: 0
    },
    valueColumnText: {
        textAlign: 'right',
        color: colors.primary[400],
        fontWeight: 600,
        fontSize: 16
    },
    column: {
        flex: 1,
        padding: 8,
        borderLeftWidth: 1,
        height: 48,
        justifyContent: 'center',
        borderLeftColor: colors.neutral[300]
    },
    lastRow: {
        borderBottomWidth: 0
    }
});
