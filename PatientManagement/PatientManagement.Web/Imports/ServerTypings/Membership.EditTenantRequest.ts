namespace PatientManagement.Membership {
    export interface EditTenantRequest extends Serenity.ServiceRequest {
        Name?: string;
        TenantWebSite?: string;
        TenantImage?: string;
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
    }
}
