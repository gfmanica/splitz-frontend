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

export const rideSchema = z.object({
    idRide: z.number().optional(),
    dsRide: z.string().min(1, 'Descrição obrigatória'),
    vlRide: z.number().min(0.01, 'Valor deve ser no mínimo 0.01'),
    dtInit: z.date({ invalid_type_error: 'Data inicial obrigatória' }),
    dtFinish: z.date({ invalid_type_error: 'Data final obrigatória' }),
    qtRide: z.number().min(0.01, 'Quantidade deve ser no mínimo 0.01'),
    fgCountWeekend: z.boolean(),
    groupedPresences: z.any(),
    payments: z.array(
        z.object({
            dsPerson: z.string().min(1, 'Nome obrigatório')
        })
    )
});

export type RideFormValues = z.infer<typeof rideSchema>;
