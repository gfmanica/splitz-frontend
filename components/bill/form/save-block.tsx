import Button from '@/components/ui/button';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export function SaveBlock({ onSubmit }: { onSubmit: () => void }) {
    return (
        <View style={styles.block}>
            <Button
                buttonStyle={styles.cancelButton}
                text="Cancelar"
                onPress={() => router.back()}
            />

            <Button
                buttonStyle={styles.saveButton}
                text="Salvar"
                onPress={onSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    saveButton: {
        width: 80
    },
    cancelButton: {
        width: 90,
        backgroundColor: colors.primary[500]
    },
    block: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 12,
        bottom: 0,
        right: 0,
        left: 0,
        gap: 12,
        height: 64,
        backgroundColor: colors.white,
        borderTopColor: colors.neutral[200],
        borderTopWidth: 1
    }
});
