namespace PatientManagement.PatientManagement {
    export class ActivityForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Activity';

    }

    export interface ActivityForm {
        MovementAndTraining: Serenity.TextAreaEditor;
        Profession: Serenity.TextAreaEditor;
    }

    [['MovementAndTraining', () => Serenity.TextAreaEditor], ['Profession', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(ActivityForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
