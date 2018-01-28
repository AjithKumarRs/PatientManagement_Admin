namespace PatientManagement.Administration {
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

    export class PaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Payments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentsForm.init)  {
                PaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.EnumEditor;

                Q.initFormType(PaymentsForm, [
                    'PaymentDetailsId', w0,
                    'CustomerName', w1,
                    'CustomerIban', w1,
                    'SubscriptionId', w0,
                    'ReasonForPayment', w1,
                    'Description', w2,
                    'Receiver', w1,
                    'IBANReceiver', w1,
                    'BICReceiver', w1,
                    'BankNameReceiver', w1,
                    'CouponId', w0,
                    'PaymentOptionId', w0,
                    'CouponKey', w1,
                    'CurrencyId', w0,
                    'Value', w1,
                    'PaymentStatus', w3
                ]);
            }
        }
    }
}
