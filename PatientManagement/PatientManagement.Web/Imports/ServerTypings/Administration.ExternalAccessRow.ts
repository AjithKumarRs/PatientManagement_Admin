namespace PatientManagement.Administration {
    export interface ExternalAccessRow {
        ExternalAccessCabinets?: number[];
        ExternalAccessId?: number;
        Name?: string;
        Url?: string;
        VisitedCount?: number;
        AccessType?: PatientManagement.AccessType;
        OutputFormat?: PatientManagement.OutputFormat;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ExternalAccessRow {
        export const idProperty = 'ExternalAccessId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.ExternalAccess';
        export const lookupKey = 'AdministrationTenants.ExternalAccess';

        export function getLookup(): Q.Lookup<ExternalAccessRow> {
            return Q.getLookup<ExternalAccessRow>('AdministrationTenants.ExternalAccess');
        }

        export declare const enum Fields {
            ExternalAccessCabinets = "ExternalAccessCabinets",
            ExternalAccessId = "ExternalAccessId",
            Name = "Name",
            Url = "Url",
            VisitedCount = "VisitedCount",
            AccessType = "AccessType",
            OutputFormat = "OutputFormat",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            IsActive = "IsActive",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
