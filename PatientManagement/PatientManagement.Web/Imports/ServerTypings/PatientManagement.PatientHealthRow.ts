namespace PatientManagement.PatientManagement {
    export interface PatientHealthRow {
        PatientId?: number;
        DailyMeals?: string;
        Diseases?: string;
        MedicinesIntake?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        PatientPersonalNumber?: number;
        PatientPhoneNumber?: number;
        PatientFirstRegistrationDate?: string;
        PatientAddress?: string;
        PatientHeight?: number;
        PatientWeight?: number;
        PatientInsertUserId?: number;
        PatientInsertDate?: string;
    }

    export namespace PatientHealthRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'DailyMeals';
        export const localTextPrefix = 'PatientManagement.PatientHealth';

        export namespace Fields {
            export declare const PatientId: string;
            export declare const DailyMeals: string;
            export declare const Diseases: string;
            export declare const MedicinesIntake: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const PatientPersonalNumber: string;
            export declare const PatientPhoneNumber: string;
            export declare const PatientFirstRegistrationDate: string;
            export declare const PatientAddress: string;
            export declare const PatientHeight: string;
            export declare const PatientWeight: string;
            export declare const PatientInsertUserId: string;
            export declare const PatientInsertDate: string;
        }

        ['PatientId', 'DailyMeals', 'Diseases', 'MedicinesIntake', 'InsertUserId', 'InsertDate', 'PatientName', 'PatientPersonalNumber', 'PatientPhoneNumber', 'PatientFirstRegistrationDate', 'PatientAddress', 'PatientHeight', 'PatientWeight', 'PatientInsertUserId', 'PatientInsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
