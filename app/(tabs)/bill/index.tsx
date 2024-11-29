import { TitleBlock } from '@/components/bill/title-block';
import { HistoryBlock } from '@/components/bill/history-block';
import { Screen } from '@/components/ui/screen';

export default function BillListScreen() {
    return (
        <Screen>
            <TitleBlock />

            <HistoryBlock />
        </Screen>
    );
}
