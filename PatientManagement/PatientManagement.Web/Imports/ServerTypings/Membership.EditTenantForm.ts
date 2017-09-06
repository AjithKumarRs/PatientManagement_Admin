namespace PatientManagement.Membership {
    export class EditTenantForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditTenantRequest';

    }

    export interface EditTenantForm {
        Email: Serenity.EmailEditor;
        Name: Serenity.StringEditor;
    }

    [['Email', () => Serenity.EmailEditor], ['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EditTenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
