namespace PatientManagement.Administration {
    export class PaymentOptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentOptions';

    }

    export interface PaymentOptionsForm {
        Days: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
    }

    [['Days', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PaymentOptionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
