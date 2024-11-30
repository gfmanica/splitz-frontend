import { Block } from '@/components/ui/block';
import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';

export function PersonBlock() {
    return (
        <Block>
            <View style={styles.titleTextContainer}>
                <Title variant="h2" text="Separar por pessoa" />

                <Button
                    buttonStyle={styles.titleAddButton}
                    icon={<Plus size={28} color={colors.white} />}
                    onPress={() => {}}
                />
            </View>

            <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ gap: 8, flex: 1 }}>
                    <Text>Nome</Text>

                    <TextInput style={styles.textInput} value="Pessoa 1" />
                </View>

                <View style={{ gap: 8, flex: 1 }}>
                    <Text>Forma</Text>

                    <TextInput style={styles.textInput} value="Dinheiro" />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text>Valor total</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() => {}}
                        icon={<Minus color={colors.white} />}
                    />

                    <TextInput
                        keyboardType="numeric"
                        style={styles.spinnerInput}
                        value="R$ 0"
                    />

                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={() => {}}
                        icon={<Plus color={colors.white} />}
                    />
                </View>
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleAddButton: {
        width: 72,
        height: 34,
        borderRadius: 36
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    minusButton: {
        width: 70,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    plusButton: {
        width: 70,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    spinnerInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: colors.neutral[300],
        textAlign: 'center'
    }
});
