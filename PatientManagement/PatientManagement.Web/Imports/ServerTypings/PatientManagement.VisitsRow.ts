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
        PatientGender?: Gender;
        PhoneNumber?: string;
        PatientName?: string;
        VisitTypeName?: string;
        VisitTypeBackgroundColor?: string;
        VisitTypeBorderColor?: string;
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
            export declare const PatientGender: string;
            export declare const PhoneNumber: string;
            export declare const PatientName: string;
            export declare const VisitTypeName: string;
            export declare const VisitTypeBackgroundColor: string;
            export declare const VisitTypeBorderColor: string;
        }

        ['VisitId', 'PatientId', 'VisitTypeId', 'Description', 'StartDate', 'EndDate', 'InsertUserId', 'InsertDate', 'PatientGender', 'PhoneNumber', 'PatientName', 'VisitTypeName', 'VisitTypeBackgroundColor', 'VisitTypeBorderColor'].forEach(x => (<any>Fields)[x] = x);
    }
}
