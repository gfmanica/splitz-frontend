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
