namespace PatientManagement.Administration {
    export interface ExternalAccessRow {
        ExternalAccessCabinets?: number[];
        ExternalAccessId?: number;
        Name?: string;
        Url?: string;
        VisitedCount?: number;
        AccessType?: PatientManagement.AccessType;
        OutputFormat?: PatientManagement.OutputFormat;
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
