namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        LifeStyleId?: number;
        PatientId?: number;
        Regime?: string;
        DailyMeals?: string;
        RemarksForFoodTake?: string;
        BadHabits?: string;
        NotEating?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        PatientName?: string;
        TenantId?: number;
    }

    export namespace LifeStylesRow {
        export const idProperty = 'LifeStyleId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Regime';
        export const localTextPrefix = 'PatientManagement.LifeStyles';
        export const lookupKey = 'PatientManagement.LifeStyles';

        export function getLookup(): Q.Lookup<LifeStylesRow> {
            return Q.getLookup<LifeStylesRow>('PatientManagement.LifeStyles');
        }

        export declare const enum Fields {
            LifeStyleId = "LifeStyleId",
            PatientId = "PatientId",
            Regime = "Regime",
            DailyMeals = "DailyMeals",
            RemarksForFoodTake = "RemarksForFoodTake",
            BadHabits = "BadHabits",
            NotEating = "NotEating",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            IsActive = "IsActive",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            PatientName = "PatientName",
            TenantId = "TenantId"
        }
    }
}
