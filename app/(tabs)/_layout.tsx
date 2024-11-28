import { colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';

import { ScrollText, Car, Bolt } from 'lucide-react-native';
import { Image, StyleSheet } from 'react-native';

const logo = require('@/assets/images/logo.png');

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary[300],
                headerTitle: () => (
                    <Image
                        source={logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                )
            }}
        >
            <Tabs.Screen
                name="(bill)"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => (
                        <ScrollText size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="(ride)"
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

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 30
    }
});
