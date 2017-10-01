namespace PatientManagement.PatientManagement {
    export class CabinetsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Cabinets';

    }

    export interface CabinetsForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
        WorkDays: Serenity.LookupEditor;
        Representatives: Serenity.LookupEditor;
        TenantId: Serenity.LookupEditor;
    }

    [['Name', () => Serenity.StringEditor], ['WorkHoursStart', () => Serenity.TimeEditor], ['WorkHoursEnd', () => Serenity.TimeEditor], ['WorkDays', () => Serenity.LookupEditor], ['Representatives', () => Serenity.LookupEditor], ['TenantId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(CabinetsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
