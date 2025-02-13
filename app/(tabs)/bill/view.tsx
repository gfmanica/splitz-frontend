import { GridView } from '@/components/bill/view/grid-view';
import { SummaryBlock } from '@/components/bill/view/summary-block';
import { Block } from '@/components/ui/block';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { Axios } from '@/lib/axios';
import { Bill } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function BillViewScreen() {
    const { id } = useLocalSearchParams();

    const { data, isFetching } = useQuery<Bill>({
        queryKey: ['bill', id],
        queryFn: () => Axios.get(`/bill/${id}`).then((res) => res.data),
        enabled: Boolean(id)
    });

    return (
        <View style={{ flex: 1 }}>
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

            {!isFetching && (
                <>
                    <ScrollView>
                        <View
                            style={{
                                flex: 1,
                                padding: 16,
                                gap: 16,
                                marginBottom: 64
                            }}
                        >
                            <Block>
                                <Title variant="h1" text="Conta 1" />
                            </Block>

                            <Block>
                                <GridView />
                            </Block>
                        </View>
                    </ScrollView>
                    
                    <SummaryBlock />
                </>
            )}
        </View>
    );
}
