namespace PatientManagement.PatientManagement {
    export class PatientHealthForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.PatientHealth';

    }

    export interface PatientHealthForm {
        PatientId: Serenity.LookupEditor;
        DailyMeals: Serenity.TextAreaEditor;
        Diseases: Serenity.TextAreaEditor;
        MedicinesIntake: Serenity.TextAreaEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['DailyMeals', () => Serenity.TextAreaEditor], ['Diseases', () => Serenity.TextAreaEditor], ['MedicinesIntake', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(PatientHealthForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
