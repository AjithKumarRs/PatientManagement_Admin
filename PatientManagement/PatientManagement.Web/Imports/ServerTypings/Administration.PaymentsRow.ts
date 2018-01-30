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

        export declare const enum Fields {
            PaymentId = "PaymentId",
            SubscriptionId = "SubscriptionId",
            TenantId = "TenantId",
            PaymentDetailsId = "PaymentDetailsId",
            PaymentOptionId = "PaymentOptionId",
            CurrencyId = "CurrencyId",
            Value = "Value",
            SubTotal = "SubTotal",
            CustomerName = "CustomerName",
            CustomerBankName = "CustomerBankName",
            CustomerIban = "CustomerIban",
            ReasonForPayment = "ReasonForPayment",
            Description = "Description",
            Receiver = "Receiver",
            IBANReceiver = "IBANReceiver",
            BICReceiver = "BICReceiver",
            BankNameReceiver = "BankNameReceiver",
            PaymentStatus = "PaymentStatus",
            MonthsPayed = "MonthsPayed",
            PaymentCurrency = "PaymentCurrency",
            PaymentType = "PaymentType",
            SubscriptionOfferId = "SubscriptionOfferId",
            SubscriptionSubscriptionEndDate = "SubscriptionSubscriptionEndDate",
            SubscriptionName = "SubscriptionName",
            PaymentDetailName = "PaymentDetailName",
            PaymentDetailsBankName = "PaymentDetailsBankName",
            PaymentDetailsIbanBeneficient = "PaymentDetailsIbanBeneficient",
            PaymentOptionMonths = "PaymentOptionMonths",
            PaymentOptionName = "PaymentOptionName",
            CouponId = "CouponId",
            CouponKey = "CouponKey",
            CouponDiscount = "CouponDiscount",
            CurrencyCurrencyId = "CurrencyCurrencyId",
            CurrencyName = "CurrencyName",
            CurrencyRate = "CurrencyRate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
