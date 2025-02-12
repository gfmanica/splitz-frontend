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
