namespace PatientManagement.PatientManagement {
    export interface PatientsFileUploadsRow {
        PatientFileUploadId?: number;
        PatientId?: number;
        FilePath?: string;
        Description?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        TenantId?: number;
    }

    export namespace PatientsFileUploadsRow {
        export const idProperty = 'PatientFileUploadId';
        export const nameProperty = 'PatientName';
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
            export declare const TenantId: string;
        }

        ['PatientFileUploadId', 'PatientId', 'FilePath', 'Description', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
