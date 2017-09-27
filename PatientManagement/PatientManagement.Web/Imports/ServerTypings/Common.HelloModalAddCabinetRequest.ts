namespace PatientManagement.Common {
    export interface HelloModalAddCabinetRequest extends Serenity.ServiceRequest {
        Name?: string;
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
    }
}
