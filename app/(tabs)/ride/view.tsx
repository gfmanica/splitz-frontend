import { PaymentGrid } from '@/components/ride/view/payment-grid';
import { RideGrid } from '@/components/ride/view/ride-grid';
import { SummaryBlock } from '@/components/ride/view/summary-block';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { Axios } from '@/lib/axios';
import { Ride } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View, Text } from 'react-native';

export default function RideViewScreen() {
    const { id } = useLocalSearchParams();

    const { data, isFetching } = useQuery<Ride>({
        queryKey: ['ride', id],
        queryFn: () => Axios.get(`/ride/${id}`).then((res) => res.data)
    });

    return (
        <Screen>
            {isFetching && (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: colors.neutral[600] }}>
                        Carregando ...
                    </Text>
                </View>
            )}

            {!isFetching && data && (
                <>
                    <ScrollView>
                        <View style={{ gap: 16, marginBottom: 76 }}>
                            <Block>
                                <Title variant="h1" text={data.dsRide} />
                            </Block>

                            <RideGrid />

                            <PaymentGrid />
                        </View>
                    </ScrollView>

                    <SummaryBlock data={data} />
                </>
            )}
        </Screen>
    );
}
