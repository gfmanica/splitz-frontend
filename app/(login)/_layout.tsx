import { LogoTitle } from '@/components/ui/logo-title';
import { colors } from '@/constants/Colors';
import { Stack } from 'expo-router';

export default function LoginLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />

            <Stack.Screen
                name="register"
                options={{
                    title: '',
                    headerShown: true,
                    headerBackTitle: 'Realizar login',
                    headerBackButtonDisplayMode: 'generic',
                    headerTintColor: colors.black,
                    headerTitle: () => <LogoTitle />
                }}
            />
        </Stack>
    );
}
