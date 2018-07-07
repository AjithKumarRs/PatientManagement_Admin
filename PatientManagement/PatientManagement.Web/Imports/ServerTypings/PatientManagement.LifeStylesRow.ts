namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        LifeStyleId?: number;
        PatientId?: number;
        Regime?: string;
        DailyMeals?: string;
        RemarksForFoodTake?: string;
        BadHabits?: string;
        NotEating?: string;
        PatientName?: string;
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
            PatientName = "PatientName",
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
