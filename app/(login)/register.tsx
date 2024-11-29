import LoginDivider from '@/components/login/login-divider';
import Button from '@/components/ui/button';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

export default function RegisterScreen() {
    return (
        <View style={styles.formContainer}>
            <View style={styles.textInputContainer}>
                <Text>Nome de usuário</Text>

                <TextInput
                    keyboardType="email-address"
                    placeholder="Digite seu nome de usuário..."
                    style={styles.textInput}
                />
            </View>

            <View style={styles.textInputContainer}>
                <Text>E-mail</Text>

                <TextInput
                    keyboardType="email-address"
                    placeholder="Digite seu e-mail..."
                    style={styles.textInput}
                />
            </View>

            <View style={styles.textInputContainer}>
                <Text>Senha</Text>

                <TextInput
                    secureTextEntry
                    placeholder="Digite sua senha..."
                    style={styles.textInput}
                />
            </View>

            <View style={styles.textInputContainer}>
                <Text>Confirmação da senha</Text>

                <TextInput
                    secureTextEntry
                    placeholder="Digite a confirmação da senha..."
                    style={styles.textInput}
                />
            </View>

            <Button
                text="Cadastrar-se"
                buttonStyle={styles.buttonRegister}
                onPress={() => router.push('/bill')}
            />

            <LoginDivider />

            <Button text="Entrar" onPress={() => router.push('/bill')} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        margin: 16,
        borderRadius: 16,
        padding: 16,
        backgroundColor: colors.white,
        gap: 16
    },
    image: {
        width: 200,
        height: 200,
        objectFit: 'contain',
        alignSelf: 'center'
    },
    buttonRegister: {
        backgroundColor: colors.primary[500]
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 16,
        borderRadius: 8,
        borderColor: colors.neutral[300]
    },
    textInputContainer: {
        gap: 8
    }
});
