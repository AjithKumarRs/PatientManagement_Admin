
namespace PatientManagement.Administration {
    export interface SubscriptionsRow {
        SubscriptionId?: number;
        Name?: string;
        OfferId?: number;
        TenantId?: number;
        SubscriptionEndDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        OfferName?: string;
        OfferMaximumSubscriptionTime?: number;
        OfferMaximumUsersPerTenant?: number;
        OfferMaximumVisitsPerTenant?: number;
        OfferExpirationDate?: string;
        OfferDescription?: string;
        OfferPrice?: number;
        OfferEnabled?: boolean;
        OfferCurrencyId?: number;
        OfferRoleId?: number;
        OfferUpdateUserId?: number;
        OfferUpdateDateField?: string;
    }

    export namespace SubscriptionsRow {
        export const idProperty = 'SubscriptionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Subscriptions';

        export namespace Fields {
            export declare const SubscriptionId;
            export declare const Name;
            export declare const OfferId;
            export declare const TenantId;
            export declare const SubscriptionEndDate;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
            export declare const OfferName: string;
            export declare const OfferMaximumSubscriptionTime: string;
            export declare const OfferMaximumUsersPerTenant: string;
            export declare const OfferMaximumVisitsPerTenant: string;
            export declare const OfferExpirationDate: string;
            export declare const OfferDescription: string;
            export declare const OfferPrice: string;
            export declare const OfferEnabled: string;
            export declare const OfferCurrencyId: string;
            export declare const OfferRoleId: string;
            export declare const OfferUpdateUserId: string;
            export declare const OfferUpdateDateField: string;
        }

        ['SubscriptionId', 'Name', 'OfferId', 'TenantId', 'SubscriptionEndDate', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'OfferName', 'OfferMaximumSubscriptionTime', 'OfferMaximumUsersPerTenant', 'OfferMaximumVisitsPerTenant', 'OfferExpirationDate', 'OfferDescription', 'OfferPrice', 'OfferEnabled', 'OfferCurrencyId', 'OfferRoleId', 'OfferUpdateUserId', 'OfferUpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

