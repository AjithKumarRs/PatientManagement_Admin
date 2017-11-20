namespace PatientManagement.Administration {
    export class OffersForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Offers';

    }

    export interface OffersForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Price: Serenity.DecimalEditor;
        IsPublic: BsSwitchEditor;
        Enabled: BsSwitchEditor;
        CurrencyId: Serenity.LookupEditor;
        RoleId: Serenity.LookupEditor;
        ExpirationDate: Serenity.DateTimeEditor;
        MaximumSubscriptionTime: Serenity.IntegerEditor;
        MaximumUsersPerTenant: Serenity.IntegerEditor;
        MaximumVisitsPerTenant: Serenity.IntegerEditor;
        MaximumPatientsPerTenant: Serenity.IntegerEditor;
        MaximumCabinets: Serenity.IntegerEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Description', () => Serenity.TextAreaEditor], ['Price', () => Serenity.DecimalEditor], ['IsPublic', () => BsSwitchEditor], ['Enabled', () => BsSwitchEditor], ['CurrencyId', () => Serenity.LookupEditor], ['RoleId', () => Serenity.LookupEditor], ['ExpirationDate', () => Serenity.DateTimeEditor], ['MaximumSubscriptionTime', () => Serenity.IntegerEditor], ['MaximumUsersPerTenant', () => Serenity.IntegerEditor], ['MaximumVisitsPerTenant', () => Serenity.IntegerEditor], ['MaximumPatientsPerTenant', () => Serenity.IntegerEditor], ['MaximumCabinets', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(OffersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
