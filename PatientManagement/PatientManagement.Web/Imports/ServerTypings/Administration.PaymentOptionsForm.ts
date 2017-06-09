

namespace PatientManagement.Administration {
    export class PaymentOptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentOptions';
    }

    export interface PaymentOptionsForm {
        Days: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
    }

    [['Days', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(PaymentOptionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}