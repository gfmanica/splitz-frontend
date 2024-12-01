import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';
import { Block } from '@/components/ui/block';
import { Trash, Pencil, Eye } from 'lucide-react-native';
import Button from '@/components/ui/button';
import { router } from 'expo-router';

export function HistoryBlock() {
    return (
        <Block style={styles.block}>
            <Title variant="h2" text="Histórico" />

            {Array.from({ length: 5 }).map((_, index) => (
                <View key={index} style={{ gap: 16, marginTop: 8 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 16,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                gap: 8,
                                flex: 1
                            }}
                        >
                            <Text>Sem título 1</Text>

                            <Text style={{ color: colors.neutral[600] }}>
                                Total: R$ 240,50
                            </Text>

                            <Text style={{ color: colors.neutral[600] }}>
                                Pessoas: 5
                            </Text>

                            <Text style={{ color: colors.neutral[600] }}>
                                Início: 27/11/2024
                            </Text>

                            <Text style={{ color: colors.neutral[600] }}>
                                Fim: 27/12/2024
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <Button
                                buttonStyle={styles.deleteButton}
                                onPress={() => router.push('/bill/view')}
                                icon={
                                    <Eye color={colors.info[200]} size={24} />
                                }
                            />
                            <Button
                                buttonStyle={styles.deleteButton}
                                onPress={() => router.push('/bill/form')}
                                icon={
                                    <Pencil
                                        color={colors.neutral[600]}
                                        size={24}
                                    />
                                }
                            />

                            <Button
                                buttonStyle={styles.deleteButton}
                                onPress={() => {}}
                                icon={
                                    <Trash
                                        color={colors.primary[300]}
                                        size={24}
                                    />
                                }
                            />
                        </View>
                    </View>

                    {index !== 4 && <View style={styles.divider} />}
                </View>
            ))}
        </Block>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        gap: 16
    },
    block: {
        gap: 8
    },
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleAddButton: {
        width: 72,
        height: 34,
        borderRadius: 36,
        borderColor: colors.primary[400],
        borderWidth: 1
    },
    deleteButton: {
        backgroundColor: colors.white,
        width: 30,
        height: 30
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: colors.neutral[300]
    }
});
