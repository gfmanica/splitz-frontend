import { colors } from '@/constants/Colors';
import { Loader } from 'lucide-react-native';
import { Animated } from 'react-native';

export default function Loading() {
    const spin = new Animated.Value(0);
    const spinInterpolate = spin.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    Animated.loop(
        Animated.timing(spin, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        })
    ).start();

    return (
        <Animated.View style={{ transform: [{ rotate: spinInterpolate }] }}>
            <Loader size={20} color={colors.white} />
        </Animated.View>
    );
}
