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

        export declare const enum Fields {
            SubscriptionId = "SubscriptionId",
            Name = "Name",
            OfferId = "OfferId",
            TenantId = "TenantId",
            SubscriptionEndDate = "SubscriptionEndDate",
            Enabled = "Enabled",
            FreeDaysFromOffer = "FreeDaysFromOffer",
            IsActive = "IsActive",
            DeactivatedOn = "DeactivatedOn",
            ActivatedOn = "ActivatedOn",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            OfferName = "OfferName",
            OfferDescription = "OfferDescription",
            OfferPrice = "OfferPrice",
            OfferRoleId = "OfferRoleId",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
