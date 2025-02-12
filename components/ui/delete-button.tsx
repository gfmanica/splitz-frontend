import { colors } from '@/constants/Colors';
import { Axios } from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash } from 'lucide-react-native';

import { AlertDialog, Button } from 'tamagui';

export function DeleteButton({
    url,
    queryKey
}: {
    url: string;
    queryKey: string;
}) {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: () => Axios.delete(url),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: [queryKey]
            })
    });

    return (
        <AlertDialog native>
            <AlertDialog.Trigger asChild>
                <Button
                    unstyled
                    icon={() => <Trash color={colors.primary[300]} size={24} />}
                    noTextWrap
                />
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content>
                    <AlertDialog.Title>Excluir carona</AlertDialog.Title>
                    <AlertDialog.Description>
                        Ao confirmar, a carona será excluída permanentemente.
                    </AlertDialog.Description>

                    <AlertDialog.Cancel asChild>
                        <Button>Cancelar</Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action onPress={() => mutate()} asChild>
                        <Button>Confirmar</Button>
                    </AlertDialog.Action>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog>
    );
}
