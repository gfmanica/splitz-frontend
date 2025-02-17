import LoginDivider from '@/components/login/login-divider';
import Button from '@/components/ui/button';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
const logo = require('@/assets/images/logo.png');

// Cria esquema com Zod para validação
const loginSchema = z.object({
    email: z
        .string({ required_error: 'Campo é obrigatório' })
        .email('Email inválido'),
    password: z
        .string({ required_error: 'Campo é obrigatório' })
        .min(3, 'Senha deve ter no mínimo 3 caracteres')
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema)
    });

    const { mutate, error, isPending } = useMutation({
        mutationFn: (data: LoginFormInputs) => Axios.post('/login', data),
        onSuccess: (response) => {
            const token = response.data.token;
            Axios.defaults.headers.common['Authorization'] = `${token}`;

            router.push('/bill');
        }
    });

    const onSubmit = (data: LoginFormInputs) => {
        mutate(data);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Image source={logo} style={styles.image} />
            </View>

            <View style={styles.formContainer}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text>E-mail</Text>
                            <TextInput
                                keyboardType="email-address"
                                placeholder="Digite seu e-mail..."
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.email && (
                                <Text style={styles.errorText}>
                                    {errors.email.message}
                                </Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text>Senha</Text>
                            <TextInput
                                secureTextEntry
                                placeholder="Digite sua senha..."
                                style={styles.textInput}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.password && (
                                <Text style={styles.errorText}>
                                    {errors.password.message}
                                </Text>
                            )}
                        </>
                    )}
                />
                {error && (
                    <Text style={styles.errorText}>
                        E-mail ou senha incorretos
                    </Text>
                )}

                <Button
                    text="Entrar"
                    onPress={handleSubmit(onSubmit)}
                    isLoading={isPending}
                />

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
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4
    }
});
