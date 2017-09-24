namespace PatientManagement.PatientManagement {
    export class VisitsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Visits';

    }

    export interface VisitsForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['VisitTypeId', () => Serenity.LookupEditor], ['CabinetId', () => Serenity.LookupEditor], ['StartDate', () => Serenity.DateTimeEditor], ['EndDate', () => Serenity.DateTimeEditor], ['Description', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(VisitsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
