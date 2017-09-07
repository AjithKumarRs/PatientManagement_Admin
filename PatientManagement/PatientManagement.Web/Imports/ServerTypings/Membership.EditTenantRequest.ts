namespace PatientManagement.Membership {
    export interface EditTenantRequest extends Serenity.ServiceRequest {
        Name?: string;
        TenantWebSite?: string;
        TenantImage?: string;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
    }
}
