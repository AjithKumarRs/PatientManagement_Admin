
namespace PatientManagement.Administration {
    export interface PaymentsRow {
        PaymentId?: number;
        SubscriptionId?: number;
        TenantId?: number;
        PaymentDetailsId?: number;
        PaymentOptionId?: number;
        CurrencyId?: number;
        Value?: number;
        RoleBefore?: string;
        RoleAfter?: string;
        PaymentStatus?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        SubscriptionOfferId?: number;
        SubscriptionTenantId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionInsertUserId?: number;
        SubscriptionInsertDate?: string;
        SubscriptionUpdateUserId?: number;
        SubscriptionUpdateDateField?: string;
        PaymentDetailName?: string;
        PaymentDetailsBankName?: string;
        PaymentDetailsIbanBeneficient?: string;
        PaymentDetailsTenantId?: number;
        PaymentDetailsInsertUserId?: number;
        PaymentDetailsInsertDate?: string;
        PaymentDetailsUpdateUserId?: number;
        PaymentDetailsUpdateDateField?: string;
        PaymentOptionDays?: number;
        PaymentOptionName?: string;
        PaymentOptionInsertUserId?: number;
        PaymentOptionInsertDate?: string;
        PaymentOptionUpdateUserId?: number;
        PaymentOptionUpdateDateField?: string;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyRate?: number;
        CurrencyEnabled?: boolean;
        CurrencyBaseCurrencyId?: number;
        CurrencyUpdateUserId?: number;
        CurrencyUpdateDateField?: string;
    }

    export namespace PaymentsRow {
        export const idProperty = 'PaymentId';
        export const nameProperty = 'RoleBefore';
        export const localTextPrefix = 'Administration.Payments';

        export namespace Fields {
            export declare const PaymentId;
            export declare const SubscriptionId;
            export declare const TenantId;
            export declare const PaymentDetailsId;
            export declare const PaymentOptionId;
            export declare const CurrencyId;
            export declare const Value;
            export declare const RoleBefore;
            export declare const RoleAfter;
            export declare const PaymentStatus;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionTenantId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const SubscriptionInsertUserId: string;
            export declare const SubscriptionInsertDate: string;
            export declare const SubscriptionUpdateUserId: string;
            export declare const SubscriptionUpdateDateField: string;
            export declare const PaymentDetailName: string;
            export declare const PaymentDetailsBankName: string;
            export declare const PaymentDetailsIbanBeneficient: string;
            export declare const PaymentDetailsTenantId: string;
            export declare const PaymentDetailsInsertUserId: string;
            export declare const PaymentDetailsInsertDate: string;
            export declare const PaymentDetailsUpdateUserId: string;
            export declare const PaymentDetailsUpdateDateField: string;
            export declare const PaymentOptionDays: string;
            export declare const PaymentOptionName: string;
            export declare const PaymentOptionInsertUserId: string;
            export declare const PaymentOptionInsertDate: string;
            export declare const PaymentOptionUpdateUserId: string;
            export declare const PaymentOptionUpdateDateField: string;
            export declare const CurrencyCurrencyId: string;
            export declare const CurrencyName: string;
            export declare const CurrencyRate: string;
            export declare const CurrencyEnabled: string;
            export declare const CurrencyBaseCurrencyId: string;
            export declare const CurrencyUpdateUserId: string;
            export declare const CurrencyUpdateDateField: string;
        }

        ['PaymentId', 'SubscriptionId', 'TenantId', 'PaymentDetailsId', 'PaymentOptionId', 'CurrencyId', 'Value', 'RoleBefore', 'RoleAfter', 'PaymentStatus', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'SubscriptionOfferId', 'SubscriptionTenantId', 'SubscriptionSubscriptionEndDate', 'SubscriptionInsertUserId', 'SubscriptionInsertDate', 'SubscriptionUpdateUserId', 'SubscriptionUpdateDateField', 'PaymentDetailName', 'PaymentDetailsBankName', 'PaymentDetailsIbanBeneficient', 'PaymentDetailsTenantId', 'PaymentDetailsInsertUserId', 'PaymentDetailsInsertDate', 'PaymentDetailsUpdateUserId', 'PaymentDetailsUpdateDateField', 'PaymentOptionDays', 'PaymentOptionName', 'PaymentOptionInsertUserId', 'PaymentOptionInsertDate', 'PaymentOptionUpdateUserId', 'PaymentOptionUpdateDateField', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyRate', 'CurrencyEnabled', 'CurrencyBaseCurrencyId', 'CurrencyUpdateUserId', 'CurrencyUpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

