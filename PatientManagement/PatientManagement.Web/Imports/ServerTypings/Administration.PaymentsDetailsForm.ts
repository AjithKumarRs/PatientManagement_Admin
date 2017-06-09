

namespace PatientManagement.Administration {
    export class PaymentsDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PaymentsDetails';
    }

    export interface PaymentsDetailsForm {
        BeneficiaryName: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        IbanBeneficient: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
    }

    [['BeneficiaryName', () => Serenity.StringEditor], ['BankName', () => Serenity.StringEditor], ['IbanBeneficient', () => Serenity.StringEditor], ['TenantId', () => Serenity.IntegerEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(PaymentsDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}