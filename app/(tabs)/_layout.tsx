import { colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { ScrollText, Car, Bolt } from 'lucide-react-native';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary[300],
                tabBarStyle: {
                    paddingTop: 8
                }
            }}
        >
            <Tabs.Screen
                name="bill"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <ScrollText size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="ride"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Car size={28} color={color} />
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Bolt size={24} color={color} />
                }}
            />
        </Tabs>
    );
}
