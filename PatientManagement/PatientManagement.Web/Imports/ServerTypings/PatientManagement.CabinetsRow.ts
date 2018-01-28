namespace PatientManagement.PatientManagement {
    export interface CabinetsRow {
        CabinetId?: number;
        WorkDays?: number[];
        Name?: string;
        Description?: string;
        City?: string;
        Country?: string;
        Representatives?: number[];
        UserSpecialties?: string[];
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
        PhoneNumber?: number;
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
            Country = "Country",
            Representatives = "Representatives",
            UserSpecialties = "UserSpecialties",
            WorkHoursStart = "WorkHoursStart",
            WorkHoursEnd = "WorkHoursEnd",
            PhoneNumber = "PhoneNumber",
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
