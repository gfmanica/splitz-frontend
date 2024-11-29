import Button from '@/components/ui/button';
import { StyleSheet } from 'react-native';
import { Plus } from 'lucide-react-native';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';

export function FlutuantAddButton() {
    return (
        <Button
            buttonStyle={styles.addButton}
            onPress={() => router.push('/bill/form')}
            icon={<Plus size={30} color={colors.white} />}
        />
    );
}

const styles = StyleSheet.create({
    addButton: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.primary[400],
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 70,
        height: 70,
        elevation: 5, // Sombra (para Android)
        shadowColor: '#000', // Cor da sombra (para iOS)
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 4 // Raio da sombra
    }
});
