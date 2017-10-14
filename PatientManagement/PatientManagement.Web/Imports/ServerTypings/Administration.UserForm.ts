namespace PatientManagement.Administration {
    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';

    }

    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Cabinets: Serenity.LookupEditor;
        RestrictedToCabinets: BsSwitchEditor;
        PhoneNumber: Serenity.StringEditor;
        WebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        Info: Serenity.TextAreaEditor;
        EmailSignature: Serenity.HtmlContentEditor;
        Source: Serenity.StringEditor;
        IsActive: BsSwitchEditor;
        TenantId: Serenity.LookupEditor;
    }

    [['Username', () => Serenity.StringEditor], ['DisplayName', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['Password', () => Serenity.PasswordEditor], ['PasswordConfirm', () => Serenity.PasswordEditor], ['Cabinets', () => Serenity.LookupEditor], ['RestrictedToCabinets', () => BsSwitchEditor], ['PhoneNumber', () => Serenity.StringEditor], ['WebSite', () => Serenity.StringEditor], ['UserImage', () => Serenity.ImageUploadEditor], ['Info', () => Serenity.TextAreaEditor], ['EmailSignature', () => Serenity.HtmlContentEditor], ['Source', () => Serenity.StringEditor], ['IsActive', () => BsSwitchEditor], ['TenantId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(UserForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
