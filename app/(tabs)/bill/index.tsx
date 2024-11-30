import { TitleBlock } from '@/components/bill/index/title-block';
import { HistoryBlock } from '@/components/bill/index/history-block';
import { Screen } from '@/components/ui/screen';

export default function BillListScreen() {
    return (
        <Screen>
            <TitleBlock />

            <HistoryBlock />
        </Screen>
    );
}
