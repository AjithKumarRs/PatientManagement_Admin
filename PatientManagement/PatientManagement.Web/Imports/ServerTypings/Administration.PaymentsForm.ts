

namespace PatientManagement.Administration {
    export class PaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Payments';
    }

    export interface PaymentsForm {
        SubscriptionId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
        PaymentDetailsId: Serenity.IntegerEditor;
        PaymentOptionId: Serenity.IntegerEditor;
        CurrencyId: Serenity.IntegerEditor;
        Value: Serenity.DecimalEditor;
        RoleBefore: Serenity.StringEditor;
        RoleAfter: Serenity.StringEditor;
        PaymentStatus: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
    }

    [['SubscriptionId', () => Serenity.IntegerEditor], ['TenantId', () => Serenity.IntegerEditor], ['PaymentDetailsId', () => Serenity.IntegerEditor], ['PaymentOptionId', () => Serenity.IntegerEditor], ['CurrencyId', () => Serenity.IntegerEditor], ['Value', () => Serenity.DecimalEditor], ['RoleBefore', () => Serenity.StringEditor], ['RoleAfter', () => Serenity.StringEditor], ['PaymentStatus', () => Serenity.IntegerEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(PaymentsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}