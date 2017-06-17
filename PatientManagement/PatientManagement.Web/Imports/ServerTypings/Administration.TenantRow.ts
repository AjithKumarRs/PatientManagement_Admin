namespace PatientManagement.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        CurrencyId?: number;
        CurrencyName?: string;
        SubscriptionRequired?: boolean;
        SubscriptionId?: number;
        SubscriptionOfferId?: number;
        SubscriptionTenantId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionInsertUserId?: number;
        SubscriptionInsertDate?: string;
        SubscriptionUpdateUserId?: number;
        SubscriptionUpdateDateField?: string;
    }

    export namespace TenantRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenant';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantRow> {
            return Q.getLookup<TenantRow>('Administration.Tenant');
        }

        export namespace Fields {
            export declare const TenantId: string;
            export declare const TenantName: string;
            export declare const CurrencyId: string;
            export declare const CurrencyName: string;
            export declare const SubscriptionRequired: string;
            export declare const SubscriptionId: string;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionTenantId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const SubscriptionInsertUserId: string;
            export declare const SubscriptionInsertDate: string;
            export declare const SubscriptionUpdateUserId: string;
            export declare const SubscriptionUpdateDateField: string;
        }

        ['TenantId', 'TenantName', 'CurrencyId', 'CurrencyName', 'SubscriptionRequired', 'SubscriptionId', 'SubscriptionOfferId', 'SubscriptionTenantId', 'SubscriptionSubscriptionEndDate', 'SubscriptionInsertUserId', 'SubscriptionInsertDate', 'SubscriptionUpdateUserId', 'SubscriptionUpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}
