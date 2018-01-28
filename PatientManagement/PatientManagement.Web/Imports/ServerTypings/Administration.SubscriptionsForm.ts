namespace PatientManagement.Administration {
    export interface SubscriptionsForm {
        Name: Serenity.StringEditor;
        OfferId: Serenity.LookupEditor;
        SubscriptionEndDate: Serenity.DateEditor;
        Enabled: BsSwitchEditor;
        FreeDaysFromOffer: Serenity.IntegerEditor;
        TenantId: Serenity.LookupEditor;
    }

    export class SubscriptionsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Subscriptions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubscriptionsForm.init)  {
                SubscriptionsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = BsSwitchEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(SubscriptionsForm, [
                    'Name', w0,
                    'OfferId', w1,
                    'SubscriptionEndDate', w2,
                    'Enabled', w3,
                    'FreeDaysFromOffer', w4,
                    'TenantId', w1
                ]);
            }
        }
    }
}
