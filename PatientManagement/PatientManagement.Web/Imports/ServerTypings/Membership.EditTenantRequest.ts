namespace PatientManagement.Membership {
    export interface EditTenantRequest extends Serenity.ServiceRequest {
        Email?: string;
        Name?: string;
    }
}
