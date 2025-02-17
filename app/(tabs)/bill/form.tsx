import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/bill/form/main-block';
import { PersonBlock } from '@/components/bill/form/person-block';
import { SaveBlock } from '@/components/bill/form/save-block';
import { useLocalSearchParams } from 'expo-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import { Bill, BillFormValues, billSchema } from '@/types/types';
import { Text, View } from 'tamagui';
import { colors } from '@/constants/Colors';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, ScrollView } from 'react-native';
import { useEffect } from 'react';

export default function BillFormScreen() {
    const { id } = useLocalSearchParams();
    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery<Bill>({
        queryKey: ['bill', id],
        queryFn: () => Axios.get(`/bill/${id}`).then((res) => res.data),
        enabled: Boolean(id)
    });

    const methods = useForm<BillFormValues>({
        resolver: zodResolver(billSchema),
        defaultValues: {
            dsBill: '',
            vlBill: 0,
            qtPerson: 0,
            payments: []
        }
    });

    useEffect(() => methods.reset(data), [data]);

    console.log(methods.formState.errors);

    const mutation = useMutation({
        mutationFn: (formData: BillFormValues) =>
            data ? Axios.put('/bill', formData) : Axios.post('/bill', formData),
        onSuccess: (bill: any) => {
            Alert.alert('Sucesso', 'Conta salva com sucesso!');

            queryClient.invalidateQueries({
                queryKey: ['bills']
            });

            methods.reset(bill.data);
        },
        onError: (error: any) =>
            Alert.alert('Erro', error.message || 'Erro ao salvar a conta')
    });

    const onSubmit = methods.handleSubmit((formData) =>
        mutation.mutate(formData)
    );

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
                <FormProvider {...methods}>
                    <ScrollView>
                        <View
                            style={{
                                flex: 1,
                                padding: 16,
                                gap: 16,
                                marginBottom: 64
                            }}
                        >
                            <MainBlock />

                            <PersonBlock />
                        </View>
                    </ScrollView>

                    <SaveBlock onSubmit={onSubmit} />
                </FormProvider>
            )}
        </View>
    );
}
