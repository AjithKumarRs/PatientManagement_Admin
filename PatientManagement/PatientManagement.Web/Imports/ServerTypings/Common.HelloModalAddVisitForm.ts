namespace PatientManagement.Common {
    export class HelloModalAddVisitForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddVisit';

    }

    export interface HelloModalAddVisitForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['VisitTypeId', () => Serenity.LookupEditor], ['CabinetId', () => Serenity.LookupEditor], ['StartDate', () => Serenity.DateTimeEditor], ['EndDate', () => Serenity.DateTimeEditor], ['Description', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(HelloModalAddVisitForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
