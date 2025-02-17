import { PaymentGrid } from '@/components/ride/view/payment-grid';
import { RideGrid } from '@/components/ride/view/ride-grid';
import { SummaryBlock } from '@/components/ride/view/summary-block';
import { Block } from '@/components/ui/block';
import Loading from '@/components/ui/loading';
import { Screen } from '@/components/ui/screen';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { Axios } from '@/lib/axios';
import { Ride } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ScrollView, View, Text, Alert } from 'react-native';

export default function RideViewScreen() {
    const { id } = useLocalSearchParams();
    const queryClient = useQueryClient();
    const [ride, setRide] = useState<Ride | null>(null);

    const methods = useForm<Ride>();

    const { getValues, reset } = methods;

    const { data, isFetching } = useQuery<Ride>({
        queryKey: ['ride', id],
        queryFn: () => Axios.get(`/ride/${id}`).then((res) => res.data),
        gcTime: 0
    });

    const { mutate } = useMutation({
        mutationFn: () => Axios.put(`/ride`, getValues()),

        onError: () => {
            Alert.alert('Falha', 'Falha ao salvar. Revertendo alteração.');
        },
        onSuccess: () => {
            Alert.alert('Sucesso', 'Conta salva com sucesso.');

            setRide(getValues());

            queryClient.invalidateQueries({
                queryKey: ['ride', id]
            });
        }
    });

    useEffect(() => {
        if (data) {
            setRide(data);
            reset(data);
        }
    }, [data]);

    return (
        <Screen>
            {isFetching && !ride && (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Loading />
                </View>
            )}

            {((isFetching && ride) || ride) && (
                <FormProvider {...methods}>
                    <ScrollView>
                        <View style={{ gap: 16, marginBottom: 76 }}>
                            <Block>
                                <Title variant="h1" text={ride.dsRide} />
                            </Block>

                            <RideGrid save={mutate} />

                            <PaymentGrid save={mutate} />
                        </View>
                    </ScrollView>

                    <SummaryBlock data={ride} />
                </FormProvider>
            )}
        </Screen>
    );
}
