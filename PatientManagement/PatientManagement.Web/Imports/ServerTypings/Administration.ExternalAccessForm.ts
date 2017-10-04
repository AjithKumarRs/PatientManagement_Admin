namespace PatientManagement.Administration {
    export class ExternalAccessForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.ExternalAccess';

    }

    export interface ExternalAccessForm {
        Name: Serenity.StringEditor;
        ExternalAccessCabinets: Serenity.LookupEditor;
        AccessType: Serenity.EnumEditor;
        OutputFormat: Serenity.EnumEditor;
    }

    [['Name', () => Serenity.StringEditor], ['ExternalAccessCabinets', () => Serenity.LookupEditor], ['AccessType', () => Serenity.EnumEditor], ['OutputFormat', () => Serenity.EnumEditor]].forEach(x => Object.defineProperty(ExternalAccessForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
