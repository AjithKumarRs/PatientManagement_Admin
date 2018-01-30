namespace PatientManagement.PatientManagement {
    export interface PatientHealthRow {
        PatientHealthId?: number;
        PatientId?: number;
        Diseases?: string;
        MedicinesIntake?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantId?: number;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
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
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            PatientName = "PatientName",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            TenantId = "TenantId",
            IsActive = "IsActive",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
