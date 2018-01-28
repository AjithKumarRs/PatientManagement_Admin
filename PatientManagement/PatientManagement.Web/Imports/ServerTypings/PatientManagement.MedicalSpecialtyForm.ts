namespace PatientManagement.PatientManagement {
    export interface MedicalSpecialtyForm {
        Name: Serenity.StringEditor;
    }

    export class MedicalSpecialtyForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.MedicalSpecialty';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicalSpecialtyForm.init)  {
                MedicalSpecialtyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MedicalSpecialtyForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
