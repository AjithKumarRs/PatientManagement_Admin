namespace PatientManagement.Membership {
    export class EditTenantForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditTenant';

    }

    export interface EditTenantForm {
        TenantName: Serenity.StringEditor;
        TenantWebSite: Serenity.StringEditor;
        TenantImage: Serenity.ImageUploadEditor;
        OverrideUsersEmailSignature: BsSwitchEditor;
        TenantEmailSignature: Serenity.HtmlContentEditor;
    }

    [['TenantName', () => Serenity.StringEditor], ['TenantWebSite', () => Serenity.StringEditor], ['TenantImage', () => Serenity.ImageUploadEditor], ['OverrideUsersEmailSignature', () => BsSwitchEditor], ['TenantEmailSignature', () => Serenity.HtmlContentEditor]].forEach(x => Object.defineProperty(EditTenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
