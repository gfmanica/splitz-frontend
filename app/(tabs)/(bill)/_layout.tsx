import { Stack } from 'expo-router';

export default function BillLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="bill-form" />

            <Stack.Screen name="bill-list" />

            <Stack.Screen name="bill-view" />
        </Stack>
    );
}
