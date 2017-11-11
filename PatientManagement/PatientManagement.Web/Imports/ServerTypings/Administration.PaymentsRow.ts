namespace PatientManagement.Administration {
    export interface PaymentsRow {
        PaymentId?: number;
        SubscriptionId?: number;
        TenantId?: number;
        PaymentDetailsId?: number;
        PaymentOptionId?: number;
        CurrencyId?: number;
        Value?: number;
        SubTotal?: number;
        CustomerName?: string;
        CustomerBankName?: string;
        CustomerIban?: string;
        ReasonForPayment?: string;
        Description?: string;
        Receiver?: string;
        IBANReceiver?: string;
        BICReceiver?: string;
        BankNameReceiver?: string;
        PaymentStatus?: PatientManagement.PaymentStatus;
        MonthsPayed?: number;
        PaymentCurrency?: string;
        PaymentType?: string;
        SubscriptionOfferId?: number;
        SubscriptionSubscriptionEndDate?: string;
        SubscriptionName?: string;
        PaymentDetailName?: string;
        PaymentDetailsBankName?: string;
        PaymentDetailsIbanBeneficient?: string;
        PaymentOptionMonths?: number;
        PaymentOptionName?: string;
        CouponId?: number[];
        CouponKey?: string;
        CouponDiscount?: number;
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
        export const nameProperty = 'SubscriptionName';
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
            export declare const SubTotal: string;
            export declare const CustomerName: string;
            export declare const CustomerBankName: string;
            export declare const CustomerIban: string;
            export declare const ReasonForPayment: string;
            export declare const Description: string;
            export declare const Receiver: string;
            export declare const IBANReceiver: string;
            export declare const BICReceiver: string;
            export declare const BankNameReceiver: string;
            export declare const PaymentStatus: string;
            export declare const MonthsPayed: string;
            export declare const PaymentCurrency: string;
            export declare const PaymentType: string;
            export declare const SubscriptionOfferId: string;
            export declare const SubscriptionSubscriptionEndDate: string;
            export declare const SubscriptionName: string;
            export declare const PaymentDetailName: string;
            export declare const PaymentDetailsBankName: string;
            export declare const PaymentDetailsIbanBeneficient: string;
            export declare const PaymentOptionMonths: string;
            export declare const PaymentOptionName: string;
            export declare const CouponId: string;
            export declare const CouponKey: string;
            export declare const CouponDiscount: string;
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

        [
            'PaymentId', 
            'SubscriptionId', 
            'TenantId', 
            'PaymentDetailsId', 
            'PaymentOptionId', 
            'CurrencyId', 
            'Value', 
            'SubTotal', 
            'CustomerName', 
            'CustomerBankName', 
            'CustomerIban', 
            'ReasonForPayment', 
            'Description', 
            'Receiver', 
            'IBANReceiver', 
            'BICReceiver', 
            'BankNameReceiver', 
            'PaymentStatus', 
            'MonthsPayed', 
            'PaymentCurrency', 
            'PaymentType', 
            'SubscriptionOfferId', 
            'SubscriptionSubscriptionEndDate', 
            'SubscriptionName', 
            'PaymentDetailName', 
            'PaymentDetailsBankName', 
            'PaymentDetailsIbanBeneficient', 
            'PaymentOptionMonths', 
            'PaymentOptionName', 
            'CouponId', 
            'CouponKey', 
            'CouponDiscount', 
            'CurrencyCurrencyId', 
            'CurrencyName', 
            'CurrencyRate', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'TenantName', 
            'InsertUserName', 
            'UpdateUserName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
