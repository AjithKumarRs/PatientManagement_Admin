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
        UpdateDateField?: string;
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

        export namespace Fields {
            export declare const OfferId: string;
            export declare const Name: string;
            export declare const MaximumSubscriptionTime: string;
            export declare const MaximumUsersPerTenant: string;
            export declare const MaximumVisitsPerTenant: string;
            export declare const MaximumPatientsPerTenant: string;
            export declare const MaximumCabinets: string;
            export declare const ExpirationDate: string;
            export declare const Description: string;
            export declare const Price: string;
            export declare const Enabled: string;
            export declare const CurrencyId: string;
            export declare const RoleId: string;
            export declare const CurrencyCurrencyId: string;
            export declare const CurrencyName: string;
            export declare const CurrencyEnabled: string;
            export declare const RoleRoleName: string;
            export declare const IsPublic: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['OfferId', 'Name', 'MaximumSubscriptionTime', 'MaximumUsersPerTenant', 'MaximumVisitsPerTenant', 'MaximumPatientsPerTenant', 'MaximumCabinets', 'ExpirationDate', 'Description', 'Price', 'Enabled', 'CurrencyId', 'RoleId', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyEnabled', 'RoleRoleName', 'IsPublic', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'IsActive', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
