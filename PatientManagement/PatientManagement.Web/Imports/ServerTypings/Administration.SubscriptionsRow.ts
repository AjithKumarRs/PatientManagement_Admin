namespace PatientManagement.Administration {
    export interface SubscriptionsRow {
        SubscriptionId?: number;
        Name?: string;
        OfferId?: number;
        TenantId?: number;
        SubscriptionEndDate?: string;
        Enabled?: number;
        FreeDaysFromOffer?: number;
        IsActive?: number;
        DeactivatedOn?: string;
        ActivatedOn?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        OfferName?: string;
        OfferDescription?: string;
        OfferPrice?: number;
        OfferRoleId?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace SubscriptionsRow {
        export const idProperty = 'SubscriptionId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Subscriptions';
        export const lookupKey = 'Administration.Subscriptions';

        export function getLookup(): Q.Lookup<SubscriptionsRow> {
            return Q.getLookup<SubscriptionsRow>('Administration.Subscriptions');
        }

        export namespace Fields {
            export declare const SubscriptionId: string;
            export declare const Name: string;
            export declare const OfferId: string;
            export declare const TenantId: string;
            export declare const SubscriptionEndDate: string;
            export declare const Enabled: string;
            export declare const FreeDaysFromOffer: string;
            export declare const IsActive: string;
            export declare const DeactivatedOn: string;
            export declare const ActivatedOn: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const OfferName: string;
            export declare const OfferDescription: string;
            export declare const OfferPrice: string;
            export declare const OfferRoleId: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['SubscriptionId', 'Name', 'OfferId', 'TenantId', 'SubscriptionEndDate', 'Enabled', 'FreeDaysFromOffer', 'IsActive', 'DeactivatedOn', 'ActivatedOn', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'OfferName', 'OfferDescription', 'OfferPrice', 'OfferRoleId', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
