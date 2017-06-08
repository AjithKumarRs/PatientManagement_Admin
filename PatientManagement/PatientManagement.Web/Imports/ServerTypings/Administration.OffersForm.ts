

namespace PatientManagement.Administration {
    export class OffersForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Offers';
    }

    export interface OffersForm {
        Name: Serenity.StringEditor;
        MaximumSubscriptionTime: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CurrencyId: Serenity.IntegerEditor;
        RoleId: Serenity.IntegerEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
    }

    [['Name', () => Serenity.StringEditor], ['MaximumSubscriptionTime', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['CurrencyId', () => Serenity.IntegerEditor], ['RoleId', () => Serenity.IntegerEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(OffersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}