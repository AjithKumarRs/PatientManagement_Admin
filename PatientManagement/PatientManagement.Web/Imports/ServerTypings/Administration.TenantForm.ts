namespace PatientManagement.Administration {
    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        TenantWebSite: Serenity.StringEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
        CurrencyId: Serenity.LookupEditor;
        SubscriptionId: Serenity.LookupEditor;
        SubscriptionRequired: BsSwitchEditor;
    }

    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantForm.init)  {
                TenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = BsSwitchEditor;
                var w3 = s.HtmlContentEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(TenantForm, [
                    'TenantName', w0,
                    'TenantImage', w1,
                    'TenantWebSite', w0,
                    'OverrideUsersEmailSignature', w2,
                    'TenantEmailSignature', w3,
                    'CurrencyId', w4,
                    'SubscriptionId', w4,
                    'SubscriptionRequired', w2
                ]);
            }
        }
    }
}
