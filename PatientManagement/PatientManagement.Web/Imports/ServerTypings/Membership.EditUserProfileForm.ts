namespace PatientManagement.Membership {
    export class EditUserProfileForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditUserProfile';

    }

    export interface EditUserProfileForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
    }

    [['DisplayName', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['PhoneNumber', () => Serenity.StringEditor], ['WebSite', () => Serenity.StringEditor], ['UserImage', () => Serenity.ImageUploadEditor], ['Info', () => Serenity.TextAreaEditor], ['EmailSignature', () => Serenity.HtmlContentEditor]].forEach(x => Object.defineProperty(EditUserProfileForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
