namespace PatientManagement.Administration {
    export interface PaymentOptionsForm {
        Months: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
    }

    export class PaymentOptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentOptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentOptionsForm.init)  {
                PaymentOptionsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(PaymentOptionsForm, [
                    'Months', w0,
                    'Name', w1
                ]);
            }
        }
    }
}
