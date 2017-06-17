namespace PatientManagement.Administration {
    export interface OffersRow {
        OfferId?: number;
        Name?: string;
        MaximumSubscriptionTime?: number;
        MaximumUsersPerTenant?: number;
        MaximumVisitsPerTenant?: number;
        ExpirationDate?: string;
        Description?: string;
        Price?: number;
        Enabled?: boolean;
        CurrencyId?: number;
        RoleId?: number;
        UpdateUserId?: number;
        UserName?: string;
        UpdateDateField?: string;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyEnabled?: boolean;
        RoleRoleName?: string;
    }

    export namespace OffersRow {
        export const idProperty = 'OfferId';
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
            export declare const ExpirationDate: string;
            export declare const Description: string;
            export declare const Price: string;
            export declare const Enabled: string;
            export declare const CurrencyId: string;
            export declare const RoleId: string;
            export declare const UpdateUserId: string;
            export declare const UserName: string;
            export declare const UpdateDateField: string;
            export declare const CurrencyCurrencyId: string;
            export declare const CurrencyName: string;
            export declare const CurrencyEnabled: string;
            export declare const RoleRoleName: string;
        }

        ['OfferId', 'Name', 'MaximumSubscriptionTime', 'MaximumUsersPerTenant', 'MaximumVisitsPerTenant', 'ExpirationDate', 'Description', 'Price', 'Enabled', 'CurrencyId', 'RoleId', 'UpdateUserId', 'UserName', 'UpdateDateField', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyEnabled', 'RoleRoleName'].forEach(x => (<any>Fields)[x] = x);
    }
}
