import { PaymentGrid } from '@/components/ride/view/payment-grid';
import { RideGrid } from '@/components/ride/view/ride-grid';
import { SummaryBlock } from '@/components/ride/view/summary-block';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';
import { ScrollView, View } from 'react-native';

export default function RideViewScreen() {
    return (
        <Screen>
            <ScrollView>
                <View style={{ gap: 16, marginBottom: 76 }}>
                    <Block>
                        <Title variant="h1" text="Carona 1" />
                    </Block>

                    <RideGrid />

                    <PaymentGrid />
                </View>
            </ScrollView>

            <SummaryBlock />
        </Screen>
    );
}
