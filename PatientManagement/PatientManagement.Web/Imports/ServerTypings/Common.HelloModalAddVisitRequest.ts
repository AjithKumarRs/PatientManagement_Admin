namespace PatientManagement.Common {
    export interface HelloModalAddVisitRequest extends Serenity.ServiceRequest {
        PatientId?: number;
        VisitTypeId?: number;
        CabinetId?: number;
        StartDate?: string;
        EndDate?: string;
        Description?: string;
    }
}
