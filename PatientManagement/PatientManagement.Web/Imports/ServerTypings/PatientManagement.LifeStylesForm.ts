namespace PatientManagement.PatientManagement {
    export class LifeStylesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.LifeStyles';

    }

    export interface LifeStylesForm {
        Job: Serenity.StringEditor;
        Movement: Serenity.StringEditor;
        Training: Serenity.StringEditor;
        BadHabits: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['Job', () => Serenity.StringEditor], ['Movement', () => Serenity.StringEditor], ['Training', () => Serenity.StringEditor], ['BadHabits', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(LifeStylesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
