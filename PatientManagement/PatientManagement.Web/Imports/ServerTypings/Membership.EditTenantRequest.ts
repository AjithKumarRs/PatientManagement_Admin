namespace PatientManagement.Membership {
    export interface EditTenantRequest extends Serenity.ServiceRequest {
        TenantName?: string;
        TenantWebSite?: string;
        TenantImage?: string;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
    }
}
