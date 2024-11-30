import { LogoTitle } from '@/components/ui/logo-title';
import { colors } from '@/constants/Colors';
import { Stack } from 'expo-router';

export default function RideLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitle: () => <LogoTitle />,
                headerTintColor: colors.black,
                headerBackTitle: 'Voltar'
            }}
        >
            <Stack.Screen name="index" />

            <Stack.Screen name="form" />

            <Stack.Screen name="view" />
        </Stack>
    );
}
