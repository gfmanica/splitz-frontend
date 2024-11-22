import { Stack } from 'expo-router';

export default function RideLayout() {
    return (
        <Stack>
            <Stack.Screen name="ride-form" />

            <Stack.Screen name="ride-list" />

            <Stack.Screen name="ride-view" />
        </Stack>
    );
}
