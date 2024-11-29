import { Stack } from 'expo-router';

export default function RideLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />

            <Stack.Screen name="form" />

            <Stack.Screen name="view" />
        </Stack>
    );
}
