namespace PatientManagement.PatientManagement {
    export class ActivityForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Activity';

    }

    export interface ActivityForm {
        MovementAndTraining: Serenity.StringEditor;
        Profession: Serenity.StringEditor;
    }

    [['MovementAndTraining', () => Serenity.StringEditor], ['Profession', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ActivityForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
