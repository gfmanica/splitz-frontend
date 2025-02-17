import { colors } from '@/constants/Colors';
import { Loader, Loader2 } from 'lucide-react-native';
import { ReactNode } from 'react';
import {
    Animated,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
    TextProps
} from 'react-native';
import Loading from './loading';

type TButton = {
    text?: string;
    icon?: ReactNode;
    onPress?: PressableProps['onPress'];
    textStyle?: TextProps['style'];
    buttonStyle?: PressableProps['style'];
    isLoading?: boolean;
};

export default function Button({
    text,
    icon,
    onPress,
    textStyle,
    buttonStyle,
    isLoading
}: TButton) {
    return (
        <Pressable
            disabled={isLoading}
            onPress={onPress ? onPress : () => {}}
            style={StyleSheet.flatten([styles.button, buttonStyle])}
        >
            {isLoading && <Loading />}

            {!isLoading && text && (
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
