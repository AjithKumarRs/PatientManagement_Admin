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

        export namespace Fields {
            export declare const TenantId: string;
            export declare const TenantName: string;
            export declare const CurrencyId: string;
            export declare const CurrencyName: string;
            export declare const SubscriptionRequired: string;
            export declare const SubscriptionId: string;
            export declare const TenantWebSite: string;
            export declare const TenantImage: string;
            export declare const OverrideUsersEmailSignature: string;
            export declare const TenantEmailSignature: string;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionTenantId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const SubscriptionInsertUserId: string;
            export declare const SubscriptionInsertDate: string;
            export declare const SubscriptionUpdateUserId: string;
            export declare const SubscriptionUpdateDateField: string;
            export declare const SubscriptionName: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
            export declare const IsActive: string;
        }

        [
            'TenantId', 
            'TenantName', 
            'CurrencyId', 
            'CurrencyName', 
            'SubscriptionRequired', 
            'SubscriptionId', 
            'TenantWebSite', 
            'TenantImage', 
            'OverrideUsersEmailSignature', 
            'TenantEmailSignature', 
            'SubscriptionOfferId', 
            'SubscriptionTenantId', 
            'SubscriptionSubscriptionEndDate', 
            'SubscriptionInsertUserId', 
            'SubscriptionInsertDate', 
            'SubscriptionUpdateUserId', 
            'SubscriptionUpdateDateField', 
            'SubscriptionName', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'InsertUserName', 
            'UpdateUserName', 
            'IsActive'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
