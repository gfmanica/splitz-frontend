import { colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';
import { User } from 'lucide-react-native';
import Button from '@/components/ui/button';
import { router } from 'expo-router';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { Axios } from '@/lib/axios';

type UserData = {
    id: string;
    email: string;
    name: string;
    expiredAt: number;
};

export default function SettingsScreen() {
    const [userData, setUserData] = useState<UserData>(
        jwtDecode(String(Axios.defaults.headers.common['Authorization']))
    );

    return (
        <Screen>
            <Block>
                <View style={styles.userContainer}>
                    <View style={styles.userIconContainer}>
                        <User color={colors.white} size={30} />
                    </View>

                    <View>
                        <Text>{userData?.name || 'Nome do Usuário'}</Text>

                        <Text style={styles.emailText}>
                            {userData?.email || 'email@exemplo.com'}
                        </Text>
                    </View>
                </View>

                <Button text="Sair" onPress={() => router.replace('/')} />
            </Block>
        </Screen>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    userIconContainer: {
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary[300],
        borderRadius: '50%',
        borderColor: colors.primary[400],
        borderWidth: 1
    },
    emailText: {
        color: colors.neutral[600]
    }
});
