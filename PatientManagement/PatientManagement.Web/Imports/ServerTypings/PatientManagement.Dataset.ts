namespace PatientManagement.PatientManagement {
    export interface Dataset {
        label?: string;
        PatientsTotal?: number;
        VisitsTotal?: number;
        MostReservedVisitType?: string;
        data?: number[];
        backgroundColor?: string[];
    }
}
