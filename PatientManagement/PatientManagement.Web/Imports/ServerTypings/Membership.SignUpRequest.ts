namespace PatientManagement.Membership {
    export interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
        TenantName?: string;
        OfferId?: number;
    }
}
