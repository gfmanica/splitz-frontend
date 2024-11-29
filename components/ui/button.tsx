import { colors } from '@/constants/Colors';
import { ReactNode } from 'react';
import {
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
    TextProps
} from 'react-native';

type TButton = {
    text?: string;
    icon?: ReactNode;
    onPress: PressableProps['onPress'];
    textStyle?: TextProps['style'];
    buttonStyle?: PressableProps['style'];
};

export default function Button({
    text,
    icon,
    onPress,
    textStyle,
    buttonStyle
}: TButton) {
    return (
        <Pressable
            onPress={onPress}
            style={StyleSheet.flatten([styles.button, buttonStyle])}
        >
            {text && (
                <Text style={StyleSheet.flatten([styles.text, textStyle])}>
                    {text}
                </Text>
            )}

            {icon}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: colors.primary[300]
    },
    text: {
        color: colors.white,
        fontWeight: 700,
        fontSize: 16
    }
});
