namespace PatientManagement.PatientManagement {
    export interface VisitsRow {
        VisitId?: number;
        PatientId?: number;
        VisitTypeId?: number;
        CabinetId?: number;
        CabinetName?: string;
        CabinetIsActive?: number;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        TenantName?: string;
        InsertUserName?: string;
        PatientGender?: Gender;
        PatientEmail?: string;
        PatientNotifyOnChange?: boolean;
        PhoneNumber?: string;
        PatientName?: string;
        VisitTypeName?: string;
        VisitTypeBackgroundColor?: string;
        VisitTypeBorderColor?: string;
        TenantId?: number;
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
            export declare const CabinetId: string;
            export declare const CabinetName: string;
            export declare const CabinetIsActive: string;
            export declare const Description: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const PatientGender: string;
            export declare const PatientEmail: string;
            export declare const PatientNotifyOnChange: string;
            export declare const PhoneNumber: string;
            export declare const PatientName: string;
            export declare const VisitTypeName: string;
            export declare const VisitTypeBackgroundColor: string;
            export declare const VisitTypeBorderColor: string;
            export declare const TenantId: string;
        }

        ['VisitId', 'PatientId', 'VisitTypeId', 'CabinetId', 'CabinetName', 'CabinetIsActive', 'Description', 'StartDate', 'EndDate', 'InsertUserId', 'InsertDate', 'TenantName', 'InsertUserName', 'PatientGender', 'PatientEmail', 'PatientNotifyOnChange', 'PhoneNumber', 'PatientName', 'VisitTypeName', 'VisitTypeBackgroundColor', 'VisitTypeBorderColor', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
