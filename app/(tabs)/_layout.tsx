import { Stack, Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="(bill)" />
            <Tabs.Screen name="(ride)" />
            <Tabs.Screen name="settings" />
        </Tabs>
    );
}
