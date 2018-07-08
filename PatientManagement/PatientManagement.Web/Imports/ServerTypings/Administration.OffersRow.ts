namespace PatientManagement.Administration {
    export interface OffersRow {
        OfferId?: number;
        Name?: string;
        MaximumSubscriptionTime?: number;
        MaximumUsersPerTenant?: number;
        MaximumVisitsPerTenant?: number;
        MaximumPatientsPerTenant?: number;
        MaximumCabinets?: number;
        ExpirationDate?: string;
        Description?: string;
        Price?: number;
        Enabled?: number;
        CurrencyId?: number;
        RoleId?: number;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyEnabled?: boolean;
        RoleRoleName?: string;
        IsPublic?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OffersRow {
        export const idProperty = 'OfferId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Offers';
        export const lookupKey = 'Administration.Offers';

        export function getLookup(): Q.Lookup<OffersRow> {
            return Q.getLookup<OffersRow>('Administration.Offers');
        }

        export declare const enum Fields {
            OfferId = "OfferId",
            Name = "Name",
            MaximumSubscriptionTime = "MaximumSubscriptionTime",
            MaximumUsersPerTenant = "MaximumUsersPerTenant",
            MaximumVisitsPerTenant = "MaximumVisitsPerTenant",
            MaximumPatientsPerTenant = "MaximumPatientsPerTenant",
            MaximumCabinets = "MaximumCabinets",
            ExpirationDate = "ExpirationDate",
            Description = "Description",
            Price = "Price",
            Enabled = "Enabled",
            CurrencyId = "CurrencyId",
            RoleId = "RoleId",
            CurrencyCurrencyId = "CurrencyCurrencyId",
            CurrencyName = "CurrencyName",
            CurrencyEnabled = "CurrencyEnabled",
            RoleRoleName = "RoleRoleName",
            IsPublic = "IsPublic",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
