import { PaymentGrid } from '@/components/ride/view/payment-grid';
import { RideGrid } from '@/components/ride/view/ride-grid';
import { SummaryBlock } from '@/components/ride/view/summary-block';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';

export default function RideViewScreen() {
    return (
        <Screen>
            <Block>
                <Title variant="h1" text="Carona 1" />
            </Block>

            <RideGrid />

            <PaymentGrid />

            <SummaryBlock />
        </Screen>
    );
}
