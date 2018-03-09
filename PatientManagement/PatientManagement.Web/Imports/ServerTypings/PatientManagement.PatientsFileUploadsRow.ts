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

        export declare const enum Fields {
            PatientFileUploadId = "PatientFileUploadId",
            PatientId = "PatientId",
            FilePath = "FilePath",
            Description = "Description",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            PatientName = "PatientName",
            TenantId = "TenantId"
        }
    }
}
