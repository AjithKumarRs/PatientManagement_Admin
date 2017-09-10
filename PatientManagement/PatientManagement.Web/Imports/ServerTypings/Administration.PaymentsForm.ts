namespace PatientManagement.Administration {
    export class PaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Payments';

    }

    export interface PaymentsForm {
        SubscriptionId: Serenity.LookupEditor;
        PaymentDetailsId: Serenity.LookupEditor;
        PaymentOptionId: Serenity.LookupEditor;
        CurrencyId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
        PaymentStatus: Serenity.EnumEditor;
    }

    [['SubscriptionId', () => Serenity.LookupEditor], ['PaymentDetailsId', () => Serenity.LookupEditor], ['PaymentOptionId', () => Serenity.LookupEditor], ['CurrencyId', () => Serenity.LookupEditor], ['Value', () => Serenity.StringEditor], ['PaymentStatus', () => Serenity.EnumEditor]].forEach(x => Object.defineProperty(PaymentsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
