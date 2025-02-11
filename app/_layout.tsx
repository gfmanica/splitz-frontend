import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createTamagui, TamaguiProvider } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4'; // for quick config install this
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true
});

const queryClient = new QueryClient();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <TamaguiProvider
                config={createTamagui({
                    ...defaultConfig,
                    themes: {
                        ...defaultConfig.themes,
                        light: {
                            ...defaultConfig.themes.light,
                            primaryLight: '#db4a2a',
                            primary: '#ad371d',
                            primaryDark: '#7b2715'
                        }
                    }
                })}
            >
                <Stack
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="(login)" />
                    <Stack.Screen name="(tabs)" />
                </Stack>
            </TamaguiProvider>
        </QueryClientProvider>
    );
}
