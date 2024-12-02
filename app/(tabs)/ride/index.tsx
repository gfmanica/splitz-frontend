import { HistoryBlock } from '@/components/ride/index/history-block';
import { TitleBlock } from '@/components/ride/index/title-block';
import { Screen } from '@/components/ui/screen';
import { ScrollView, View } from 'react-native';

export default function RideListScreen() {
    return (
        <ScrollView>
            <View style={{ gap: 16, padding: 16 }}>
                <TitleBlock />

                <HistoryBlock />
            </View>
        </ScrollView>
    );
}
