namespace PatientManagement.PatientManagement {
    export interface VisitsInfoRow {
        VisitInfoId?: number;
        VisitId?: number;
        Remarks?: string;
        InsertUserId?: number;
        InsertDate?: string;
        VisitPatientId?: number;
        VisitVisitInfoId?: number;
        VisitVisitTypeId?: number;
        VisitDate?: string;
        VisitInsertUserId?: number;
        VisitInsertDate?: string;
    }

    export namespace VisitsInfoRow {
        export const idProperty = 'VisitInfoId';
        export const nameProperty = 'Remarks';
        export const localTextPrefix = 'PatientManagement.VisitsInfo';

        export namespace Fields {
            export declare const VisitInfoId: string;
            export declare const VisitId: string;
            export declare const Remarks: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const VisitPatientId: string;
            export declare const VisitVisitInfoId: string;
            export declare const VisitVisitTypeId: string;
            export declare const VisitDate: string;
            export declare const VisitInsertUserId: string;
            export declare const VisitInsertDate: string;
        }

        ['VisitInfoId', 'VisitId', 'Remarks', 'InsertUserId', 'InsertDate', 'VisitPatientId', 'VisitVisitInfoId', 'VisitVisitTypeId', 'VisitDate', 'VisitInsertUserId', 'VisitInsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
