namespace PatientManagement.PatientManagement {
    export class LifeStylesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.LifeStyles';

    }

    export interface LifeStylesForm {
        PatientId: Serenity.LookupEditor;
        BadHabits: Serenity.TextAreaEditor;
        RemarksForFoodTake: Serenity.TextAreaEditor;
        Regime: Serenity.TextAreaEditor;
        DailyMeals: Serenity.TextAreaEditor;
        FavoriteFood: Serenity.TextAreaEditor;
        NotEating: Serenity.TextAreaEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['BadHabits', () => Serenity.TextAreaEditor], ['RemarksForFoodTake', () => Serenity.TextAreaEditor], ['Regime', () => Serenity.TextAreaEditor], ['DailyMeals', () => Serenity.TextAreaEditor], ['FavoriteFood', () => Serenity.TextAreaEditor], ['NotEating', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(LifeStylesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
