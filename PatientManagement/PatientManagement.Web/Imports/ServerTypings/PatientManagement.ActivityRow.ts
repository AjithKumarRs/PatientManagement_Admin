namespace PatientManagement.PatientManagement {
    export interface ActivityRow {
        ActivityId?: number;
        PatientId?: number;
        MovementAndTraining?: string;
        Profession?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
    }

    export namespace ActivityRow {
        export const idProperty = 'ActivityId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Profession';
        export const localTextPrefix = 'PatientManagement.Activity';
        export const lookupKey = 'PatientManagement.Activity';

        export function getLookup(): Q.Lookup<ActivityRow> {
            return Q.getLookup<ActivityRow>('PatientManagement.Activity');
        }

        export declare const enum Fields {
            ActivityId = "ActivityId",
            PatientId = "PatientId",
            MovementAndTraining = "MovementAndTraining",
            Profession = "Profession",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId"
        }
    }
}
