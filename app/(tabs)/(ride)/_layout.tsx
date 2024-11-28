import { Stack } from 'expo-router';

export default function RideLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ride-form" />

            <Stack.Screen name="ride-list" />

            <Stack.Screen name="ride-view" />
        </Stack>
    );
}
