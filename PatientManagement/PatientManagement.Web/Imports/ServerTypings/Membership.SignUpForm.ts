namespace PatientManagement.Membership {
    export interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        TenantName: Serenity.StringEditor;
        OfferId: PatientManagement.OfferDropDownEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    export class SignUpForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.SignUp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SignUpForm.init)  {
                SignUpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = PatientManagement.OfferDropDownEditor;
                var w2 = s.EmailEditor;
                var w3 = s.PasswordEditor;

                Q.initFormType(SignUpForm, [
                    'DisplayName', w0,
                    'TenantName', w0,
                    'OfferId', w1,
                    'Email', w2,
                    'ConfirmEmail', w2,
                    'Password', w3,
                    'ConfirmPassword', w3
                ]);
            }
        }
    }
}
