

namespace PatientManagement.Administration {
    export class SubscriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Subscriptions';
    }

    export interface SubscriptionsForm {
        Name: Serenity.StringEditor;
        OfferId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
        SubscriptionEndDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
    }

    [['Name', () => Serenity.StringEditor], ['OfferId', () => Serenity.IntegerEditor], ['TenantId', () => Serenity.IntegerEditor], ['SubscriptionEndDate', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(SubscriptionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}