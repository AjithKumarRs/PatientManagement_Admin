namespace PatientManagement {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: { [key: string]: boolean };
        RolesList?: string[];
        PaidPeriod?: string;
    }
}
