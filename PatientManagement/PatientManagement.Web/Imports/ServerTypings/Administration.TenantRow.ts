namespace PatientManagement.Administration {
    export interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        CurrencyId?: number;
        CurrencyName?: string;
        SubscriptionRequired?: boolean;
        SubscriptionId?: number;
        TenantWebSite?: string;
        TenantImage?: string;
        OverrideUsersEmailSignature?: boolean;
        TenantEmailSignature?: string;
        SubscriptionOfferId?: number;
        SubscriptionTenantId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionInsertUserId?: number;
        SubscriptionInsertDate?: string;
        SubscriptionUpdateUserId?: number;
        SubscriptionUpdateDateField?: string;
        SubscriptionName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        IsActive?: number;
    }

    export namespace TenantRow {
        export const idProperty = 'TenantId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenant';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantRow> {
            return Q.getLookup<TenantRow>('Administration.Tenant');
        }

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            CurrencyId = "CurrencyId",
            CurrencyName = "CurrencyName",
            SubscriptionRequired = "SubscriptionRequired",
            SubscriptionId = "SubscriptionId",
            TenantWebSite = "TenantWebSite",
            TenantImage = "TenantImage",
            OverrideUsersEmailSignature = "OverrideUsersEmailSignature",
            TenantEmailSignature = "TenantEmailSignature",
            SubscriptionOfferId = "SubscriptionOfferId",
            SubscriptionTenantId = "SubscriptionTenantId",
            SubscriptionSubscriptionEndDate = "SubscriptionSubscriptionEndDate",
            SubscriptionInsertUserId = "SubscriptionInsertUserId",
            SubscriptionInsertDate = "SubscriptionInsertDate",
            SubscriptionUpdateUserId = "SubscriptionUpdateUserId",
            SubscriptionUpdateDateField = "SubscriptionUpdateDateField",
            SubscriptionName = "SubscriptionName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            IsActive = "IsActive"
        }
    }
}
