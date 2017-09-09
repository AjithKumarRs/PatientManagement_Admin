namespace PatientManagement {
    export interface ScriptUserDefinition {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        TenantId?: number;
        RolesList?: string[];
        PaidPeriod?: string;
    }
}
