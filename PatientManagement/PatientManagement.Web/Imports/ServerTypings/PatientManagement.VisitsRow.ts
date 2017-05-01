namespace PatientManagement.PatientManagement {
    export interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitTypeId?: number;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        PatientPersonalNumber?: number;
        PatientPhoneNumber?: number;
        PatientFirstRegistrationDate?: string;
        PatientAddress?: string;
        PatientHeight?: number;
        PatientWeight?: number;
        VisitTypeName?: string;
    }

    export namespace VisitsRow {
        export const idProperty = 'VisitId';
        export const localTextPrefix = 'PatientManagement.Visits';
        export const lookupKey = 'PatientManagement.Visits';

        export function getLookup(): Q.Lookup<VisitsRow> {
            return Q.getLookup<VisitsRow>('PatientManagement.Visits');
        }

        export namespace Fields {
            export declare const VisitId: string;
            export declare const PatientId: string;
            export declare const VisitTypeId: string;
            export declare const Description: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const PatientPersonalNumber: string;
            export declare const PatientPhoneNumber: string;
            export declare const PatientFirstRegistrationDate: string;
            export declare const PatientAddress: string;
            export declare const PatientHeight: string;
            export declare const PatientWeight: string;
            export declare const VisitTypeName: string;
        }

        ['VisitId', 'PatientId', 'VisitTypeId', 'Description', 'StartDate', 'EndDate', 'InsertUserId', 'InsertDate', 'PatientName', 'PatientPersonalNumber', 'PatientPhoneNumber', 'PatientFirstRegistrationDate', 'PatientAddress', 'PatientHeight', 'PatientWeight', 'VisitTypeName'].forEach(x => (<any>Fields)[x] = x);
    }
}
