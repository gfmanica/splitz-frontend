import { HistoryBlock } from '@/components/ride/index/history-block';
import { TitleBlock } from '@/components/ride/index/title-block';
import { Screen } from '@/components/ui/screen';

export default function RideListScreen() {
    return (
        <Screen>
            <TitleBlock />

            <HistoryBlock />
        </Screen>
    );
}
