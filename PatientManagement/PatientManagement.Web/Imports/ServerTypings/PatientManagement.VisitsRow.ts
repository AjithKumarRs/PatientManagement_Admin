namespace PatientManagement.PatientManagement {
    export interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitInfoId?: number;
        VisitTypeId?: number;
        Date?: string;
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
        VisitTypeName?: string;
        VisitTypeInsertUserId?: number;
        VisitTypeInsertDate?: string;
    }

    export namespace VisitsRow {
        export const idProperty = 'VisitId';
        export const localTextPrefix = 'PatientManagement.Visits';

        export namespace Fields {
            export declare const VisitId: string;
            export declare const PatientId: string;
            export declare const VisitInfoId: string;
            export declare const VisitTypeId: string;
            export declare const Date: string;
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
            export declare const VisitTypeName: string;
            export declare const VisitTypeInsertUserId: string;
            export declare const VisitTypeInsertDate: string;
        }

        ['VisitId', 'PatientId', 'VisitInfoId', 'VisitTypeId', 'Date', 'InsertUserId', 'InsertDate', 'PatientName', 'PatientPersonalNumber', 'PatientPhoneNumber', 'PatientFirstRegistrationDate', 'PatientAddress', 'PatientHeight', 'PatientWeight', 'PatientInsertUserId', 'PatientInsertDate', 'VisitTypeName', 'VisitTypeInsertUserId', 'VisitTypeInsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
