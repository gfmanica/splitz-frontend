import { TitleBlock } from '@/components/bill/index/title-block';
import { HistoryBlock } from '@/components/bill/index/history-block';
import { Screen } from '@/components/ui/screen';
import { ScrollView, View } from 'react-native';

export default function BillListScreen() {
    return (
        <ScrollView>
            <View style={{ gap: 16, padding: 16 }}>
                <TitleBlock />

                <HistoryBlock />
            </View>
        </ScrollView>
    );
}
