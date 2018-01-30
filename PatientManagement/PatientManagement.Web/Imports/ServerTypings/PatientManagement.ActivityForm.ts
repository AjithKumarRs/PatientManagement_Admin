namespace PatientManagement.PatientManagement {
    export interface ActivityForm {
        PatientId: Serenity.LookupEditor;
        MovementAndTraining: Serenity.TextAreaEditor;
        Profession: Serenity.TextAreaEditor;
    }

    export class ActivityForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Activity';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivityForm.init)  {
                ActivityForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ActivityForm, [
                    'PatientId', w0,
                    'MovementAndTraining', w1,
                    'Profession', w1
                ]);
            }
        }
    }
}
