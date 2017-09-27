namespace PatientManagement.Common {
    export interface HelloModalAddPatientRequest extends Serenity.ServiceRequest {
        Name?: string;
        Gender?: number;
        PhoneNumber?: string;
        Email?: string;
        NotifyOnChange?: boolean;
    }
}
