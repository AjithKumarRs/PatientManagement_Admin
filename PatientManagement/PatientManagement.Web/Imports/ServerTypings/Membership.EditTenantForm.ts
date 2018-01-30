namespace PatientManagement.Membership {
    export interface EditTenantForm {
        TenantName: Serenity.StringEditor;
        TenantWebSite: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
    }

    export class EditTenantForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditTenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EditTenantForm.init)  {
                EditTenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = BsSwitchEditor;
                var w3 = s.HtmlContentEditor;

                Q.initFormType(EditTenantForm, [
                    'TenantName', w0,
                    'TenantWebSite', w0,
                    'TenantImage', w1,
                    'OverrideUsersEmailSignature', w2,
                    'TenantEmailSignature', w3
                ]);
            }
        }
    }
}
