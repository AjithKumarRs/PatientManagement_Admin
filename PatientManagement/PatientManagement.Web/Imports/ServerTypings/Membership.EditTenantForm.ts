namespace PatientManagement.Membership {
    export class EditTenantForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.EditTenantRequest';

    }

    export interface EditTenantForm {
        Email: Serenity.EmailEditor;
    }

    [['Email', () => Serenity.EmailEditor]].forEach(x => Object.defineProperty(EditTenantForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
