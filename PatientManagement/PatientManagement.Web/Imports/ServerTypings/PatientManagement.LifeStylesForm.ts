namespace PatientManagement.PatientManagement {
    export class LifeStylesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.LifeStyles';

    }

    export interface LifeStylesForm {
        PatientId: Serenity.LookupEditor;
        Job: Serenity.TextAreaEditor;
        Movement: Serenity.TextAreaEditor;
        Training: Serenity.TextAreaEditor;
        BadHabits: Serenity.TextAreaEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['Job', () => Serenity.TextAreaEditor], ['Movement', () => Serenity.TextAreaEditor], ['Training', () => Serenity.TextAreaEditor], ['BadHabits', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(LifeStylesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
