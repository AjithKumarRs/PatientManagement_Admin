namespace PatientManagement.PatientManagement {
    export interface PatientsFileUploadsRow {
        PatientFileUploadId?: number;
        PatientId?: number;
        FilePath?: string;
        Description?: string;
        PatientName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
    }

    export namespace PatientsFileUploadsRow {
        export const idProperty = 'PatientFileUploadId';
        export const isActiveProperty = 'IsActive';
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
            PatientName = "PatientName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId"
        }
    }
}
