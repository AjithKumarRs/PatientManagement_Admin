namespace PatientManagement.PatientManagement {
    export interface PatientsFileUploadsForm {
        PatientId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
    }

    export class PatientsFileUploadsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.PatientsFileUploads';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatientsFileUploadsForm.init)  {
                PatientsFileUploadsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.MultipleImageUploadEditor;

                Q.initFormType(PatientsFileUploadsForm, [
                    'PatientId', w0,
                    'Description', w1,
                    'FilePath', w2
                ]);
            }
        }
    }
}
