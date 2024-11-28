import { Image, StyleSheet } from 'react-native';

const logo = require('@/assets/images/logo.png');

export function LogoTitle() {
    return <Image source={logo} style={styles.logo} resizeMode="contain" />;
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 40,
        marginBottom: 8
    }
});
