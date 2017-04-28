namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        PatientId?: number;
        Job?: string;
        Movement?: string;
        Training?: string;
        BadHabits?: string;
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

    export namespace LifeStylesRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'Job';
        export const localTextPrefix = 'PatientManagement.LifeStyles';

        export namespace Fields {
            export declare const PatientId: string;
            export declare const Job: string;
            export declare const Movement: string;
            export declare const Training: string;
            export declare const BadHabits: string;
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

        ['PatientId', 'Job', 'Movement', 'Training', 'BadHabits', 'InsertUserId', 'InsertDate', 'PatientName', 'PatientPersonalNumber', 'PatientPhoneNumber', 'PatientFirstRegistrationDate', 'PatientAddress', 'PatientHeight', 'PatientWeight', 'PatientInsertUserId', 'PatientInsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
