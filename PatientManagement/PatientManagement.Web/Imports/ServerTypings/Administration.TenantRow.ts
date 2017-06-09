
namespace PatientManagement.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        CurrencyId?: number;
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

        export namespace Fields {
            export declare const TenantId;
            export declare const TenantName;
            export declare const CurrencyId;
            export declare const SubscriptionRequired;
            export declare const SubscriptionId;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionTenantId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const SubscriptionInsertUserId: string;
            export declare const SubscriptionInsertDate: string;
            export declare const SubscriptionUpdateUserId: string;
            export declare const SubscriptionUpdateDateField: string;
        }

        ['TenantId', 'TenantName', 'CurrencyId', 'SubscriptionRequired', 'SubscriptionId', 'SubscriptionOfferId', 'SubscriptionTenantId', 'SubscriptionSubscriptionEndDate', 'SubscriptionInsertUserId', 'SubscriptionInsertDate', 'SubscriptionUpdateUserId', 'SubscriptionUpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

