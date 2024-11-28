import { colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginDivider() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={style.divider} />

            <Text style={style.text}>Ou</Text>

            <View style={style.divider} />
        </View>
    );
}

const style = StyleSheet.create({
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.neutral[300]
    },
    text: {
        marginLeft: 8,
        marginRight: 8,
        fontSize: 12
    }
});
