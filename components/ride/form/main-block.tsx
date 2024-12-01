import { Block } from '@/components/ui/block';
import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Plus, Minus, X } from 'lucide-react-native';

export function MainBlock() {
    return (
        <Block>
            <Title variant="h1" text="Nova carona" />

            <View style={{ gap: 8 }}>
                <Text>Nome</Text>

                <TextInput
                    secureTextEntry
                    placeholder="Digite o nome da conta..."
                    style={styles.textInput}
                />
            </View>

            <View style={{ gap: 8 }}>
                <Text>Valor da carona</Text>

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

            <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ gap: 8, flex: 1 }}>
                    <Text>De</Text>

                    <TextInput style={styles.textInput} value="27/11/2024" />
                </View>

                <View style={{ gap: 8, flex: 1 }}>
                    <Text>Até</Text>

                    <TextInput style={styles.textInput} value="27/12/2024" />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text>Caronas por dia</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        buttonStyle={styles.minusButton}
                        onPress={() => {}}
                        icon={<Minus color={colors.white} />}
                    />

                    <TextInput
                        keyboardType="numeric"
                        style={styles.spinnerInput}
                        value="1"
                    />

                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={() => {}}
                        icon={<Plus color={colors.white} />}
                    />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text>Pessoas</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Adicionar pessoas..."
                        style={styles.addInput}
                    />

                    <Button
                        buttonStyle={styles.plusButton}
                        onPress={() => {}}
                        icon={<Plus color={colors.white} />}
                    />
                </View>
            </View>

            <View style={{ gap: 8, flexWrap: 'wrap', flexDirection: 'row' }}>
                {['Ana', 'Steven', 'Ricardo', 'Boaretto'].map((name) => (
                    <View key={name} style={styles.pill}>
                        <Text style={styles.pillText}>{name}</Text>

                        <X size={20} color={colors.primary[500]} />
                    </View>
                ))}
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
    pillText: {
        color: colors.primary[500]
    },
    pill: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 4,
        paddingHorizontal: 12,
        backgroundColor: colors.primary[100],
        borderColor: colors.primary[200],
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
    addInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 16,
        borderColor: colors.neutral[300]
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
