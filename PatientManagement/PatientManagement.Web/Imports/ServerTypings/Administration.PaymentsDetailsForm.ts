namespace PatientManagement.Administration {
    export interface PaymentsDetailsForm {
        Name: Serenity.StringEditor;
        PaymentType: Serenity.EnumEditor;
        BeneficiaryName: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IbanBeneficient: Serenity.StringEditor;
    }

    export class PaymentsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentsDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentsDetailsForm.init)  {
                PaymentsDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;

                Q.initFormType(PaymentsDetailsForm, [
                    'Name', w0,
                    'PaymentType', w1,
                    'BeneficiaryName', w0,
                    'BankName', w0,
                    'IbanBeneficient', w0
                ]);
            }
        }
    }
}
