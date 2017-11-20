namespace PatientManagement.PatientManagement {
    export class MedicalSpecialtyExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.MedicalSpecialtyExcelImport';

    }

    export interface MedicalSpecialtyExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    [['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(MedicalSpecialtyExcelImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
