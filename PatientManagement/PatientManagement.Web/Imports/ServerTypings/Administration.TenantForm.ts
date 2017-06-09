

namespace PatientManagement.Administration {
    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
    }

    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        CurrencyId: Serenity.IntegerEditor;
        SubscriptionRequired: Serenity.BooleanEditor;
        SubscriptionId: Serenity.IntegerEditor;
    }

    [['TenantName', () => Serenity.StringEditor], ['CurrencyId', () => Serenity.IntegerEditor], ['SubscriptionRequired', () => Serenity.BooleanEditor], ['SubscriptionId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(TenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}