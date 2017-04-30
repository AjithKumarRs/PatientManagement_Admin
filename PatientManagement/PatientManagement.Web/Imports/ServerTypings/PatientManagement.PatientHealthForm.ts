﻿namespace PatientManagement.PatientManagement {
    export class PatientHealthForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.PatientHealth';

    }

    export interface PatientHealthForm {
        DailyMeals: Serenity.StringEditor;
        Diseases: Serenity.StringEditor;
        MedicinesIntake: Serenity.StringEditor;
    }

    [['DailyMeals', () => Serenity.StringEditor], ['Diseases', () => Serenity.StringEditor], ['MedicinesIntake', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PatientHealthForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}