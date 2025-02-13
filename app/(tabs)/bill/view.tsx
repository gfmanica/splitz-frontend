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
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function BillViewScreen() {
    const { id } = useLocalSearchParams();
    const [bill, setBill] = useState<Bill | null>(null);

    const { data, isFetching } = useQuery<Bill>({
        queryKey: ['bill', id],
        queryFn: () => Axios.get(`/bill/${id}`).then((res) => res.data),
        enabled: Boolean(id),
        gcTime: 0
    });

    useEffect(() => {
        if (data) setBill(data);
    }, [data]);

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

            {!isFetching && bill && (
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
                                <GridView bill={bill} setBill={setBill} />
                            </Block>
                        </View>
                    </ScrollView>

                    <SummaryBlock bill={bill} />
                </>
            )}
        </View>
    );
}
