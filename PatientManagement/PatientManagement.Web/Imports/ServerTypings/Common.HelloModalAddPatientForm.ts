namespace PatientManagement.Common {
    export interface HelloModalAddPatientForm {
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        NotifyOnChange: BsSwitchEditor;
    }

    export class HelloModalAddPatientForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddPatient';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HelloModalAddPatientForm.init)  {
                HelloModalAddPatientForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.EmailEditor;
                var w3 = BsSwitchEditor;

                Q.initFormType(HelloModalAddPatientForm, [
                    'Name', w0,
                    'Gender', w1,
                    'PhoneNumber', w0,
                    'Email', w2,
                    'NotifyOnChange', w3
                ]);
            }
        }
    }
}
