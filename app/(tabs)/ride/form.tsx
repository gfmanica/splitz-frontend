import React, { useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Screen } from '@/components/ui/screen';
import { MainBlock } from '@/components/ride/form/main-block';
import { SaveBlock } from '@/components/ride/form/save-block';
import { useLocalSearchParams } from 'expo-router';
import {
    useForm,
    FormProvider,
    Controller,
    useFieldArray
} from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { NumberField } from '@/components/ui/number-field';
import { Checkbox } from 'tamagui';
import { Text, TextInput, Button } from 'react-native';
import { RideFormValues, rideSchema } from '@/types/types';

// Definição do schema (groupedPresences é repassado sem validação)

export default function RideFormScreen() {
    const { id } = useLocalSearchParams();
    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery<RideFormValues>({
        queryKey: ['ride', id],
        queryFn: () =>
            Axios.get(`/bill/${id}`).then((res) => {
                // Converter campos de data se necessário
                const d = res.data;
                d.dtInit = new Date(d.dtInit);
                d.dtFinish = new Date(d.dtFinish);
                return d;
            }),
        enabled: Boolean(id)
    });

    const methods = useForm<RideFormValues>({
        resolver: zodResolver(rideSchema),
        defaultValues: {
            dsRide: '',
            vlRide: 0,
            dtInit: new Date(),
            dtFinish: new Date(),
            qtRide: 0,
            fgCountWeekend: false,
            groupedPresences: [],
            payments: []
        }
    });

    useEffect(() => {
        if (data) {
            methods.reset(data);
        }
    }, [data]);

    const mutation = useMutation({
        mutationFn: (formData: RideFormValues) =>
            data ? Axios.put('/bill', formData) : Axios.post('/bill', formData),
        onSuccess: () => {
            Alert.alert('Sucesso', 'Carona salva com sucesso!');
            queryClient.invalidateQueries({ queryKey: ['rides'] });
        },
        onError: (error: any) =>
            Alert.alert('Erro', error.message || 'Erro ao salvar a carona')
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
                    <Text>Carregando...</Text>
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
                        </View>
                    </ScrollView>

                    <SaveBlock onSubmit={onSubmit} />
                </FormProvider>
            )}
        </View>
    );
}
