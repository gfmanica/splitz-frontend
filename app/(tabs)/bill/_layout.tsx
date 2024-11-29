import { Stack } from 'expo-router';

export default function BillLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />

            <Stack.Screen
                name="form"
                options={{
                    headerBackTitle: 'Realizar login'
                }}
            />

            <Stack.Screen
                name="view"
                options={{
                    headerBackTitle: 'Realizar login'
                }}
            />
        </Stack>
    );
}
