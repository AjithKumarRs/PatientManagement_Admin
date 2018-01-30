namespace PatientManagement.PatientManagement {
    export interface MedicalSpecialtyExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class MedicalSpecialtyExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.MedicalSpecialtyExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicalSpecialtyExcelImportForm.init)  {
                MedicalSpecialtyExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(MedicalSpecialtyExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
