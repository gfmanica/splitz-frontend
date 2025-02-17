import LoginDivider from '@/components/login/login-divider';
import Button from '@/components/ui/button';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';

// Cria esquema com Zod para validação
const registerSchema = z
    .object({
        name: z
            .string({ required_error: 'Campo é obrigatório' })
            .min(1, 'Campo é obrigatório'),
        email: z
            .string({ required_error: 'Campo é obrigatório' })
            .email('Email inválido'),
        password: z
            .string({ required_error: 'Campo é obrigatório' })
            .min(3, 'Senha deve ter no mínimo 3 caracteres'),
        confirmPassword: z
            .string({ required_error: 'Campo é obrigatório' })
            .min(1, 'Campo é obrigatório')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não conferem',
        path: ['confirmPassword']
    });

type RegisterFormInputs = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema)
    });

    const { mutate, error, isPending } = useMutation({
        mutationFn: (data: RegisterFormInputs) => Axios.post('/register', data),
        onSuccess: () => router.back()
    });

    const onSubmit = (data: RegisterFormInputs) => {
        console.log(data);
        mutate(data);
    };

    return (
        <View style={styles.formContainer}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <Text>Nome de usuário</Text>
                        <TextInput
                            keyboardType="default"
                            placeholder="Digite seu nome de usuário..."
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.name && (
                            <Text style={styles.errorText}>
                                {errors.name.message}
                            </Text>
                        )}
                    </>
                )}
            />

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

            <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <Text>Confirmação da senha</Text>
                        <TextInput
                            secureTextEntry
                            placeholder="Digite a confirmação da senha..."
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.confirmPassword && (
                            <Text style={styles.errorText}>
                                {errors.confirmPassword.message}
                            </Text>
                        )}
                    </>
                )}
            />

            {error && (
                <Text style={styles.errorText}>
                    Erro ao registrar. Verifique os dados.
                </Text>
            )}

            <Button
                buttonStyle={styles.buttonRegister}
                text="Cadastrar-se"
                onPress={handleSubmit(onSubmit)}
                isLoading={isPending}
            />

            <LoginDivider />

            <Button text="Entrar" onPress={() => router.back()} />
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
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4
    }
});
