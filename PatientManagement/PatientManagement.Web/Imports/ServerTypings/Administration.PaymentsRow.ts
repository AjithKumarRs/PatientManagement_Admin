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
        PaymentStatus?: PatientManagement.PaymentStatus;
        SubscriptionOfferId?: number;
        SubscriptionSubscriptionEndDate?: string;
        PaymentDetailName?: string;
        PaymentDetailsBankName?: string;
        PaymentDetailsIbanBeneficient?: string;
        PaymentOptionDays?: number;
        PaymentOptionName?: string;
        CurrencyCurrencyId?: string;
        CurrencyName?: string;
        CurrencyRate?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PaymentsRow {
        export const idProperty = 'PaymentId';
        export const nameProperty = 'RoleBefore';
        export const localTextPrefix = 'Administration.Payments';
        export const lookupKey = 'AdministrationTenants.Payment';

        export function getLookup(): Q.Lookup<PaymentsRow> {
            return Q.getLookup<PaymentsRow>('AdministrationTenants.Payment');
        }

        export namespace Fields {
            export declare const PaymentId: string;
            export declare const SubscriptionId: string;
            export declare const TenantId: string;
            export declare const PaymentDetailsId: string;
            export declare const PaymentOptionId: string;
            export declare const CurrencyId: string;
            export declare const Value: string;
            export declare const RoleBefore: string;
            export declare const RoleAfter: string;
            export declare const PaymentStatus: string;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const PaymentDetailName: string;
            export declare const PaymentDetailsBankName: string;
            export declare const PaymentDetailsIbanBeneficient: string;
            export declare const PaymentOptionDays: string;
            export declare const PaymentOptionName: string;
            export declare const CurrencyCurrencyId: string;
            export declare const CurrencyName: string;
            export declare const CurrencyRate: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['PaymentId', 'SubscriptionId', 'TenantId', 'PaymentDetailsId', 'PaymentOptionId', 'CurrencyId', 'Value', 'RoleBefore', 'RoleAfter', 'PaymentStatus', 'SubscriptionOfferId', 'SubscriptionSubscriptionEndDate', 'PaymentDetailName', 'PaymentDetailsBankName', 'PaymentDetailsIbanBeneficient', 'PaymentOptionDays', 'PaymentOptionName', 'CurrencyCurrencyId', 'CurrencyName', 'CurrencyRate', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
