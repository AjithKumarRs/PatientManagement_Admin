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

        export namespace Fields {
            export declare const PatientHealthId: string;
            export declare const PatientId: string;
            export declare const Diseases: string;
            export declare const MedicinesIntake: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['PatientHealthId', 'PatientId', 'Diseases', 'MedicinesIntake', 'InsertUserId', 'InsertDate', 'PatientName', 'UpdateUserId', 'UpdateDateField', 'TenantId', 'IsActive', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
