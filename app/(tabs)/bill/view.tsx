import { GridView } from '@/components/bill/view/grid-view';
import { SummaryBlock } from '@/components/bill/view/summary-block';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';

export default function BillViewScreen() {
    return (
        <Screen>
            <Block>
                <Title variant="h1" text="Conta 1" />
            </Block>

            <Block>
                <GridView />
            </Block>

            <SummaryBlock />
        </Screen>
    );
}
