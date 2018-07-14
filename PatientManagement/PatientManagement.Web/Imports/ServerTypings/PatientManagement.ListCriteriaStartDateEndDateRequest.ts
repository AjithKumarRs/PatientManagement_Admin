namespace PatientManagement.PatientManagement {
    export interface ListCriteriaStartDateEndDateRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
        CabinetId?: number;
    }
}
