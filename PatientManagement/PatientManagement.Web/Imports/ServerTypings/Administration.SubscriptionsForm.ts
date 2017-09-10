namespace PatientManagement.Administration {
    export class SubscriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Subscriptions';

    }

    export interface SubscriptionsForm {
        Name: Serenity.StringEditor;
        OfferId: Serenity.LookupEditor;
        SubscriptionEndDate: Serenity.DateEditor;
        IsActive: BsSwitchEditor;
    }

    [['Name', () => Serenity.StringEditor], ['OfferId', () => Serenity.LookupEditor], ['SubscriptionEndDate', () => Serenity.DateEditor], ['IsActive', () => BsSwitchEditor]].forEach(x => Object.defineProperty(SubscriptionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
