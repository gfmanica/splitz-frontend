import Button from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { Block } from '@/components/ui/block';

export function TitleBlock() {
    return (
        <Block style={styles.block}>
            <View style={styles.titleTextContainer}>
                <Title variant="h1" text="Rachar carona" />

                <Button
                    buttonStyle={styles.titleAddButton}
                    icon={<Plus size={28} color={colors.white} />}
                    onPress={() => router.push('/ride/form')}
                />
            </View>

            <Text>
                Rache suas caronas de acordo com uma quantidade de pessoas, o
                valor da viagem e o período de tempo.
            </Text>
        </Block>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        gap: 16
    },
    block: {
        gap: 8
    },
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleAddButton: {
        width: 72,
        height: 34,
        borderRadius: 36
    }
});
