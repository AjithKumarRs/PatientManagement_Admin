namespace PatientManagement.Administration {
    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';

    }

    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        TenantWebSite: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
        CurrencyId: Serenity.LookupEditor;
        SubscriptionId: Serenity.LookupEditor;
        SubscriptionRequired: BsSwitchEditor;
    }

    [['TenantName', () => Serenity.StringEditor], ['TenantImage', () => Serenity.ImageUploadEditor], ['TenantWebSite', () => Serenity.StringEditor], ['WorkHoursStart', () => Serenity.TimeEditor], ['WorkHoursEnd', () => Serenity.TimeEditor], ['CurrencyId', () => Serenity.LookupEditor], ['SubscriptionId', () => Serenity.LookupEditor], ['SubscriptionRequired', () => BsSwitchEditor]].forEach(x => Object.defineProperty(TenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
