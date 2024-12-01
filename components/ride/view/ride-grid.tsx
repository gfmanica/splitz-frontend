import { Block } from '@/components/ui/block';
import Checkbox from '@/components/ui/checkbox';
import { colors } from '@/constants/Colors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export function RideGrid() {
    return (
        <Block style={styles.block}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.outerScrollContainer}
            >
                <ScrollView contentContainerStyle={styles.innerScrollContainer}>
                    <View style={styles.headerRow}>
                        <View style={[styles.column, styles.firstColumn]}>
                            <Text style={styles.textHeader}>Data</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textHeader}>Ana</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textHeader}>Steven</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textHeader}>Ricardo</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.textHeader}>Boaretto</Text>
                        </View>
                    </View>

                    {Array.from({ length: 10 }).map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.headerRow,
                                index === 9 && styles.lastRow
                            ]}
                        >
                            <View style={[styles.column, styles.firstColumn]}>
                                <Text>27/11/2024</Text>
                            </View>

                            <View style={styles.column}>
                                <Checkbox />
                            </View>

                            <View style={styles.column}>
                                <Checkbox />
                            </View>

                            <View style={styles.column}>
                                <Checkbox />
                            </View>

                            <View style={styles.column}>
                                <Checkbox />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        </Block>
    );
}

const styles = StyleSheet.create({
    block: {
        maxHeight: 300
    },
    outerScrollContainer: {
        flexDirection: 'row' // Para permitir o scroll horizontal
    },
    innerScrollContainer: {
        flexDirection: 'column' // Para o scroll vertical
    },
    textHeader: {
        fontWeight: '700'
    },
    headerRow: {
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.neutral[300]
    },
    firstColumn: {
        borderLeftWidth: 0
    },
    column: {
        width: 90,
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
