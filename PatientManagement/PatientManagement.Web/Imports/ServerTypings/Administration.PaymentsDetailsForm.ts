namespace PatientManagement.Administration {
    export class PaymentsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentsDetails';

    }

    export interface PaymentsDetailsForm {
        Name: Serenity.StringEditor;
        PaymentTypes: Serenity.IntegerEditor;
        BeneficiaryName: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IbanBeneficient: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor], ['PaymentTypes', () => Serenity.IntegerEditor], ['BeneficiaryName', () => Serenity.StringEditor], ['BankName', () => Serenity.StringEditor], ['IbanBeneficient', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PaymentsDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
