namespace PatientManagement.Membership {
    export interface EditUserProfileForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
    }

    export class EditUserProfileForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditUserProfile';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EditUserProfileForm.init)  {
                EditUserProfileForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.HtmlContentEditor;

                Q.initFormType(EditUserProfileForm, [
                    'DisplayName', w0,
                    'Email', w1,
                    'PhoneNumber', w0,
                    'WebSite', w0,
                    'UserImage', w2,
                    'Info', w3,
                    'EmailSignature', w4
                ]);
            }
        }
    }
}
