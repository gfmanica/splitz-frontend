import { Block } from '@/components/ui/block';
import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';

export function MainBlock() {
    return (
        <Block>
            <Title variant="h1" text="Nova conta" />

            <View style={{ gap: 8 }}>
                <Text>Nome</Text>

                <TextInput
                    secureTextEntry
                    placeholder="Digite o nome da conta..."
                    style={styles.textInput}
                />
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

            <View style={{ gap: 8 }}>
                <Text>Quantidade de pessoas</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() => {}}
                        icon={<Minus color={colors.white} />}
                    />

                    <TextInput
                        keyboardType="numeric"
                        style={styles.spinnerInput}
                        value="0"
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
