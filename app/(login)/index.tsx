import LoginDivider from '@/components/login/login-divider';
import Button from '@/components/ui/button';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require('@/assets/images/logo.png');

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Image source={logo} style={styles.image} />
            </View>

            <View style={styles.formContainer}>
                <View style={{ gap: 8 }}>
                    <Text>E-mail</Text>

                    <TextInput
                        keyboardType="email-address"
                        placeholder="Digite seu e-mail..."
                        style={styles.textInput}
                    />
                </View>

                <View style={{ gap: 8 }}>
                    <Text>Senha</Text>

                    <TextInput
                        secureTextEntry
                        placeholder="Digite sua senha..."
                        style={styles.textInput}
                    />
                </View>

                <Button text="Entrar" onPress={() => router.push('/bill')} />

                <LoginDivider />

                <Button
                    text="Cadastrar-se"
                    buttonStyle={styles.buttonRegister}
                    onPress={() => router.push('/register')}
                />
            </View>

            <Text style={styles.textFooter}>app by gfmanica</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
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
    textFooter: {
        alignSelf: 'center',
        color: colors.neutral[500]
    }
});
