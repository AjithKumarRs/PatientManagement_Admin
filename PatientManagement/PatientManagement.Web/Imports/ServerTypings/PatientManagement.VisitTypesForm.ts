namespace PatientManagement.PatientManagement {
    export class VisitTypesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.VisitTypes';

    }

    export interface VisitTypesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }

    [['Name', () => Serenity.StringEditor], ['BorderColor', () => Serenity.StringEditor], ['BackgroundColor', () => Serenity.StringEditor], ['TenantId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(VisitTypesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
