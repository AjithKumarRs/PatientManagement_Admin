namespace PatientManagement.Administration {
    export class PaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Payments';

    }

    export interface PaymentsForm {
        PaymentDetailsId: Serenity.LookupEditor;
        CustomerName: Serenity.StringEditor;
        CustomerIban: Serenity.StringEditor;
        SubscriptionId: Serenity.LookupEditor;
        ReasonForPayment: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Receiver: Serenity.StringEditor;
        IBANReceiver: Serenity.StringEditor;
        BICReceiver: Serenity.StringEditor;
        BankNameReceiver: Serenity.StringEditor;
        CouponId: Serenity.LookupEditor;
        PaymentOptionId: Serenity.LookupEditor;
        CouponKey: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        PaymentStatus: Serenity.EnumEditor;
    }

    [['PaymentDetailsId', () => Serenity.LookupEditor], ['CustomerName', () => Serenity.StringEditor], ['CustomerIban', () => Serenity.StringEditor], ['SubscriptionId', () => Serenity.LookupEditor], ['ReasonForPayment', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['Receiver', () => Serenity.StringEditor], ['IBANReceiver', () => Serenity.StringEditor], ['BICReceiver', () => Serenity.StringEditor], ['BankNameReceiver', () => Serenity.StringEditor], ['CouponId', () => Serenity.LookupEditor], ['PaymentOptionId', () => Serenity.LookupEditor], ['CouponKey', () => Serenity.StringEditor], ['CurrencyId', () => Serenity.LookupEditor], ['Value', () => Serenity.StringEditor], ['PaymentStatus', () => Serenity.EnumEditor]].forEach(x => Object.defineProperty(PaymentsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
