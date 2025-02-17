import React, { useState } from 'react';
import { Title } from '@/components/ui/title';
import { colors } from '@/constants/Colors';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Block } from '@/components/ui/block';
import { Trash, Pencil, Eye } from 'lucide-react-native';
import { router } from 'expo-router';
import { Axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { money } from '@/util/format';
import { DeleteButton } from '@/components/ui/delete-button';
import { Button } from 'tamagui';
import Loading from '@/components/ui/loading';

export function HistoryBlock() {
    const { data, isFetching } = useQuery({
        queryKey: ['bills'],
        queryFn: () => Axios.get('/bill')
    });

    return (
        <Block style={styles.block}>
            <Title variant="h2" text="Histórico" />

            {isFetching && (
                <View style={{ alignItems: 'center' }}>
                    <Loading />
                </View>
            )}

            {!isFetching &&
                data?.data.map((item: any, index: number) => (
                    <View key={item.idBill} style={{ gap: 16, marginTop: 8 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 16,
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={{
                                    gap: 8,
                                    flex: 1
                                }}
                            >
                                <Text>{item.dsBill}</Text>

                                <Text style={{ color: colors.neutral[600] }}>
                                    Total: {money(item.vlBill)}
                                </Text>

                                <Text style={{ color: colors.neutral[600] }}>
                                    Pessoas: {item.qtPerson}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <Button
                                    unstyled
                                    onPress={() =>
                                        router.push({
                                            pathname: '/bill/view',
                                            params: { id: item.idBill }
                                        })
                                    }
                                    icon={
                                        <Eye
                                            color={colors.info[200]}
                                            size={24}
                                        />
                                    }
                                />

                                <Button
                                    unstyled
                                    onPress={() =>
                                        router.push({
                                            pathname: '/bill/form',
                                            params: { id: item.idBill }
                                        })
                                    }
                                    icon={
                                        <Pencil
                                            color={colors.neutral[600]}
                                            size={24}
                                        />
                                    }
                                />

                                <DeleteButton
                                    title="Excluir conta"
                                    description="Ao confirmar, a conta será excluída permanentemente."
                                    url={`/bill/${item.idBill}`}
                                    queryKey={'bills'}
                                />
                            </View>
                        </View>

                        {index !== data?.data.length - 1 && (
                            <View style={styles.divider} />
                        )}
                    </View>
                ))}
        </Block>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        gap: 16
    },
    block: {
        gap: 8
    },
    titleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleAddButton: {
        width: 72,
        height: 34,
        borderRadius: 36,
        borderColor: colors.primary[400],
        borderWidth: 1
    },
    deleteButton: {
        backgroundColor: colors.white,
        width: 30,
        height: 30
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: colors.neutral[300]
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        gap: 16,
        alignItems: 'stretch',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'flex-end',
        width: '100%'
    },
    buttonCancel: {
        backgroundColor: colors.primary[500],
        width: 100
    },
    buttonConfirm: {
        backgroundColor: colors.primary[300],
        width: 100
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
