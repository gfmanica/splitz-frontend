import { colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { Image } from 'react-native';

const logo = require('@/assets/images/logo.png');

export default function LoginLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />

            <Stack.Screen
                name="register"
                options={{
                    title: '',
                    headerShown: true,
                    headerBackTitle: 'Realizar login',
                    headerBackButtonDisplayMode: 'generic',
                    headerTintColor: colors.black,
                    headerRight: () => (
                        <Image
                            source={logo}
                            style={{ width: 70, height: 30, marginLeft: 10 }}
                            resizeMode="contain"
                        />
                    )
                }}
            />
        </Stack>
    );
}
