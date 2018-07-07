namespace PatientManagement.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Specialties: Serenity.LookupEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Cabinets: Serenity.LookupEditor;
        RestrictedToCabinets: BsSwitchEditor;
        CanBeAssignedToVisit: BsSwitchEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
        Source: Serenity.StringEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.LookupEditor;
                var w3 = s.PasswordEditor;
                var w4 = BsSwitchEditor;
                var w5 = s.ImageUploadEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.HtmlContentEditor;
                var w8 = s.IntegerEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'Specialties', w2,
                    'Password', w3,
                    'PasswordConfirm', w3,
                    'Cabinets', w2,
                    'RestrictedToCabinets', w4,
                    'CanBeAssignedToVisit', w4,
                    'PhoneNumber', w0,
                    'WebSite', w0,
                    'UserImage', w5,
                    'Info', w6,
                    'EmailSignature', w7,
                    'Source', w0,
                    'IsActive', w8,
                    'TenantId', w8
                ]);
            }
        }
    }
}
