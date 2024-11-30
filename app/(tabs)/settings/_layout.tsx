import { LogoTitle } from '@/components/ui/logo-title';
import { Stack } from 'expo-router';

export default function SettingsLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitle: () => <LogoTitle />
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}
