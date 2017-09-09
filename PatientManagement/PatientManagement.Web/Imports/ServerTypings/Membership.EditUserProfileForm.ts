namespace PatientManagement.Membership {
    export class EditUserProfileForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditUserProfileRequest';

    }

    export interface EditUserProfileForm {
        DisplayName: Serenity.StringEditor;
        UserWebSite: Serenity.StringEditor;
        UserImage: Serenity.ImageUploadEditor;
        USerEmailSignature: Serenity.HtmlContentEditor;
    }

    [['DisplayName', () => Serenity.StringEditor], ['UserWebSite', () => Serenity.StringEditor], ['UserImage', () => Serenity.ImageUploadEditor], ['USerEmailSignature', () => Serenity.HtmlContentEditor]].forEach(x => Object.defineProperty(EditUserProfileForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
