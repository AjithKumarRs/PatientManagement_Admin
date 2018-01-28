namespace PatientManagement.PatientManagement {
    export interface LifeStylesForm {
        PatientId: Serenity.LookupEditor;
        Regime: Serenity.TextAreaEditor;
        DailyMeals: Serenity.TextAreaEditor;
    }

    export class LifeStylesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.LifeStyles';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LifeStylesForm.init)  {
                LifeStylesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(LifeStylesForm, [
                    'PatientId', w0,
                    'Regime', w1,
                    'DailyMeals', w1
                ]);
            }
        }
    }
}
