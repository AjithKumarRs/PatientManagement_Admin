namespace PatientManagement.PatientManagement {
    export interface PatientHealthForm {
        PatientId: Serenity.LookupEditor;
        Diseases: Serenity.TextAreaEditor;
        MedicinesIntake: Serenity.TextAreaEditor;
    }

    export class PatientHealthForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.PatientHealth';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatientHealthForm.init)  {
                PatientHealthForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(PatientHealthForm, [
                    'PatientId', w0,
                    'Diseases', w1,
                    'MedicinesIntake', w1
                ]);
            }
        }
    }
}
