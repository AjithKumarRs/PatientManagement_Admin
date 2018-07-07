namespace PatientManagement.PatientManagement {
    export interface PatientHealthRow {
        PatientHealthId?: number;
        PatientId?: number;
        Diseases?: string;
        MedicinesIntake?: string;
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

    export namespace PatientHealthRow {
        export const idProperty = 'PatientHealthId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Diseases';
        export const localTextPrefix = 'PatientManagement.PatientHealth';
        export const lookupKey = 'PatientManagement.PatientHealth';

        export function getLookup(): Q.Lookup<PatientHealthRow> {
            return Q.getLookup<PatientHealthRow>('PatientManagement.PatientHealth');
        }

        export declare const enum Fields {
            PatientHealthId = "PatientHealthId",
            PatientId = "PatientId",
            Diseases = "Diseases",
            MedicinesIntake = "MedicinesIntake",
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
