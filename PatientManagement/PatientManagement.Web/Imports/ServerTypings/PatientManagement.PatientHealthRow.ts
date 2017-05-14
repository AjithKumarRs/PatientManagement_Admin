namespace PatientManagement.PatientManagement {
    export interface PatientHealthRow {
        PatientId?: number;
        Diseases?: string;
        MedicinesIntake?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        TenantId?: number;
    }

    export namespace PatientHealthRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'Diseases';
        export const localTextPrefix = 'PatientManagement.PatientHealth';
        export const lookupKey = 'PatientManagement.PatientHealth';

        export function getLookup(): Q.Lookup<PatientHealthRow> {
            return Q.getLookup<PatientHealthRow>('PatientManagement.PatientHealth');
        }

        export namespace Fields {
            export declare const PatientId: string;
            export declare const Diseases: string;
            export declare const MedicinesIntake: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const TenantId: string;
        }

        ['PatientId', 'Diseases', 'MedicinesIntake', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
