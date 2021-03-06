﻿namespace PatientManagement {
    export interface ScriptUserDefinition {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        RestrictedToCabinets?: number;
        TenantCurrencyId?: number;
        Permissions?: { [key: string]: boolean };
        TenantId?: number;
        RolesList?: string[];
        PaidPeriod?: string;
    }
}
