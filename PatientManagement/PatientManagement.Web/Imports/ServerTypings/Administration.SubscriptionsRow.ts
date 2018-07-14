namespace PatientManagement.Administration {
    export interface SubscriptionsRow {
        SubscriptionId?: number;
        Name?: string;
        OfferId?: number;
        SubscriptionEndDate?: string;
        Enabled?: number;
        FreeDaysFromOffer?: number;
        DeactivatedOn?: string;
        ActivatedOn?: string;
        OfferName?: string;
        OfferDescription?: string;
        OfferPrice?: number;
        OfferRoleId?: number;
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

    export namespace SubscriptionsRow {
        export const idProperty = 'SubscriptionId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Subscriptions';
        export const lookupKey = 'Administration.Subscriptions';

        export function getLookup(): Q.Lookup<SubscriptionsRow> {
            return Q.getLookup<SubscriptionsRow>('Administration.Subscriptions');
        }

        export declare const enum Fields {
            SubscriptionId = "SubscriptionId",
            Name = "Name",
            OfferId = "OfferId",
            SubscriptionEndDate = "SubscriptionEndDate",
            Enabled = "Enabled",
            FreeDaysFromOffer = "FreeDaysFromOffer",
            DeactivatedOn = "DeactivatedOn",
            ActivatedOn = "ActivatedOn",
            OfferName = "OfferName",
            OfferDescription = "OfferDescription",
            OfferPrice = "OfferPrice",
            OfferRoleId = "OfferRoleId",
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
