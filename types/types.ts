import { z } from 'zod';

export type Ride = {
    idRide: number;
    dsRide: string;
    vlRide: number;
    dtInit: Date;
    dtFinish: Date;
    qtRide: number;
    fgCountWeekend: boolean;
    groupedPresences: GroupedPresence[];
    payments: RidePayment[];
};

export type RidePayment = {
    idRidePayment: number;
    vlPayment: number;
    fgPayed: boolean;
    dsPerson: string;
};

export type Presence = {
    idPresence: number;
    idRidePayment: number;
    qtPresence: number;
    dtRide: Date;
};

export type GroupedPresence = {
    dtRide: Date;
    presences: Presence[];
};

export type Bill = {
    idBill: number;
    dsBill: string;
    vlBill: number;
    qtPerson: number;
    payments: BillPayment[];
};

export type BillPayment = {
    idBillPayment: number;
    idBill: number;
    vlPayment: number;
    fgPayed: boolean;
    fgCustomPayment: boolean;
    dsPerson: string;
};

export const rideSchema = z
    .object({
        idRide: z.number().optional(),
        dsRide: z.string().min(1, 'Descrição obrigatória'),
        vlRide: z.number().min(0.01, 'Valor deve ser no mínimo 0,01'),
        dtInit: z.string({ invalid_type_error: 'Data inicial obrigatória' }),
        dtFinish: z.string({ invalid_type_error: 'Data final obrigatória' }),
        qtRide: z.number().min(0.01, 'Quantidade deve ser no mínimo 0,01'),
        fgCountWeekend: z.boolean(),
        groupedPresences: z.any(),
        payments: z
            .array(
                z.object({
                    dsPerson: z.string(),
                    fgPayed: z.boolean().optional(),
                    idRidePayment: z.number().optional(),
                    vlPayment: z.number().optional()
                })
            )
            .min(1, 'Adicione ao menos uma pessoa')
    })
    .refine(
        (data) => {
            const dtInit = new Date(data.dtInit);
            const dtFinish = new Date(data.dtFinish);
            return dtInit < dtFinish;
        },
        {
            message: 'A data de início deve ser menor que a data de fim',
            path: ['dtInit']
        }
    );

export type RideFormValues = z.infer<typeof rideSchema>;

export const billSchema = z.object({
    idBill: z.number().optional(),
    dsBill: z.string().min(1, 'Nome é obrigatório'),
    vlBill: z.number().min(0.01, 'Valor deve ser no mínimo 0,01'),
    qtPerson: z.number().min(0.01, 'Quantidade deve ser no mínimo 0,01'),
    payments: z.array(
        z
            .object({
                idBillPayment: z.number().optional(),
                fgPayed: z.boolean().optional(),
                fgCustomPayment: z.boolean().optional(),
                dsPerson: z.string().min(1, 'Nome da pessoa é obrigatório'),
                vlPayment: z.number()
            })
            .refine(
                (data) => {
                    if (data.fgCustomPayment) {
                        return data.vlPayment > 0;
                    }
                    return true;
                },
                {
                    message: 'Valor deve ser no mínimo 0,01',
                    path: ['vlPayment']
                }
            )
    )
});

export type BillFormValues = z.infer<typeof billSchema>;
