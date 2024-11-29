import { StyleSheet, View } from 'react-native';
import { TitleBlock } from '@/components/bill/list/title-block';

export default function BillListScreen() {
    return (
        <View style={styles.mainContainer}>
            <TitleBlock />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        gap: 16
    }
});
