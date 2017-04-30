namespace PatientManagement.PatientManagement {
    export interface PatientsFileUploadsRow {
        PatientFileUploadId?: number;
        PatientId?: number;
        FilePath?: string;
        Description?: string;
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

    export namespace PatientsFileUploadsRow {
        export const idProperty = 'PatientFileUploadId';
        export const nameProperty = 'FilePath';
        export const localTextPrefix = 'PatientManagement.PatientsFileUploads';
        export const lookupKey = 'PatientManagement.PatientsFileUploads';

        export function getLookup(): Q.Lookup<PatientsFileUploadsRow> {
            return Q.getLookup<PatientsFileUploadsRow>('PatientManagement.PatientsFileUploads');
        }

        export namespace Fields {
            export declare const PatientFileUploadId: string;
            export declare const PatientId: string;
            export declare const FilePath: string;
            export declare const Description: string;
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

        ['PatientFileUploadId', 'PatientId', 'FilePath', 'Description', 'InsertUserId', 'InsertDate', 'PatientName', 'PatientPersonalNumber', 'PatientPhoneNumber', 'PatientFirstRegistrationDate', 'PatientAddress', 'PatientHeight', 'PatientWeight', 'PatientInsertUserId', 'PatientInsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
