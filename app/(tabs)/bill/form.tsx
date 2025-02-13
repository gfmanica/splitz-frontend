import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/bill/form/main-block';
import { PersonBlock } from '@/components/bill/form/person-block';
import { SaveBlock } from '@/components/bill/form/save-block';
import { useLocalSearchParams } from 'expo-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import { Bill } from '@/types/types';
import { Text, View } from 'tamagui';
import { colors } from '@/constants/Colors';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, ScrollView } from 'react-native';
import { useEffect } from 'react';

const billSchema = z.object({
    idBill: z.number().optional(),
    dsBill: z.string().min(1, 'Nome é obrigatório'),
    vlBill: z.number().min(0.01, 'Valor deve ser no mínimo 0,01'),
    qtPerson: z.number().min(0.01, 'Quantidade deve ser no mínimo 0,01'),
    payments: z.array(
        z.object({
            dsPerson: z.string().min(1, 'Nome da pessoa é obrigatório'),
            vlPayment: z.number().min(0.01, 'Valor deve ser no mínimo 0,01')
        })
    )
});

type BillFormValues = z.infer<typeof billSchema>;

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

    console.log(methods.formState.errors);

    useEffect(() => methods.reset(data), [data]);

    const mutation = useMutation({
        mutationFn: (formData: BillFormValues) =>
            data ? Axios.put('/bill', formData) : Axios.post('/bill', formData),
        onSuccess: () => {
            Alert.alert('Sucesso', 'Conta salva com sucesso!');
            queryClient.invalidateQueries({
                queryKey: ['bills']
            });
        },
        onError: (error: any) =>
            Alert.alert('Erro', error.message || 'Erro ao salvar a conta')
    });

    const onSubmit = methods.handleSubmit((formData) => {
        mutation.mutate(formData);
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
