namespace PatientManagement.PatientManagement {
    export interface CabinetsRow {
        CabinetId?: number;
        WorkDays?: number[];
        Name?: string;
        Description?: string;
        City?: string;
        Representatives?: number[];
        UserSpecialties?: string[];
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
        PhoneNumber?: number;
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

    export namespace CabinetsRow {
        export const idProperty = 'CabinetId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.Cabinets';
        export const lookupKey = 'PatientManagement.Cabinets';

        export function getLookup(): Q.Lookup<CabinetsRow> {
            return Q.getLookup<CabinetsRow>('PatientManagement.Cabinets');
        }

        export declare const enum Fields {
            CabinetId = "CabinetId",
            WorkDays = "WorkDays",
            Name = "Name",
            Description = "Description",
            City = "City",
            Representatives = "Representatives",
            UserSpecialties = "UserSpecialties",
            WorkHoursStart = "WorkHoursStart",
            WorkHoursEnd = "WorkHoursEnd",
            PhoneNumber = "PhoneNumber",
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
