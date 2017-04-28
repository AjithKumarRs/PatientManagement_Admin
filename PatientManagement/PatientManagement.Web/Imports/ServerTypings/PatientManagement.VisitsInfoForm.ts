namespace PatientManagement.PatientManagement {
    export class VisitsInfoForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.VisitsInfo';

    }

    export interface VisitsInfoForm {
        VisitId: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    [['VisitId', () => Serenity.IntegerEditor], ['Remarks', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(VisitsInfoForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
