
namespace PatientManagement.Administration {
    export interface OffersRow {
        OfferId?: number;
        Name?: string;
        MaximumSubscriptionTime?: string;
        Description?: string;
        CurrencyId?: number;
        RoleId?: number;
        UpdateUserId?: number;
        UpdateDateField?: string;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyRate?: number;
        CurrencyEnabled?: boolean;
        CurrencyBaseCurrencyId?: number;
        CurrencyUpdateUserId?: number;
        CurrencyUpdateDateField?: string;
        RoleRoleName?: string;
        RoleTenantId?: number;
    }

    export namespace OffersRow {
        export const idProperty = 'OfferId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Offers';

        export namespace Fields {
            export declare const Id;
            export declare const Name;
            export declare const MaximumSubscriptionTime;
            export declare const Description;
            export declare const CurrencyId;
            export declare const RoleId;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
            export declare const CurrencyCurrencyId: string;
            export declare const CurrencyName: string;
            export declare const CurrencyRate: string;
            export declare const CurrencyEnabled: string;
            export declare const CurrencyBaseCurrencyId: string;
            export declare const CurrencyUpdateUserId: string;
            export declare const CurrencyUpdateDateField: string;
            export declare const RoleRoleName: string;
            export declare const RoleTenantId: string;
        }

        ['OfferId', 'Name', 'MaximumSubscriptionTime', 'Description', 'CurrencyId', 'RoleId', 'UpdateUserId', 'UpdateDateField', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyRate', 'CurrencyEnabled', 'CurrencyBaseCurrencyId', 'CurrencyUpdateUserId', 'CurrencyUpdateDateField', 'RoleRoleName', 'RoleTenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}

