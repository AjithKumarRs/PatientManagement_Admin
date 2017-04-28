namespace PatientManagement.PatientManagement {
    export class VisitsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Visits';

    }

    export interface VisitsForm {
        PatientId: Serenity.IntegerEditor;
        VisitInfoId: Serenity.IntegerEditor;
        VisitTypeId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['PatientId', () => Serenity.IntegerEditor], ['VisitInfoId', () => Serenity.IntegerEditor], ['VisitTypeId', () => Serenity.IntegerEditor], ['Date', () => Serenity.DateEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(VisitsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
