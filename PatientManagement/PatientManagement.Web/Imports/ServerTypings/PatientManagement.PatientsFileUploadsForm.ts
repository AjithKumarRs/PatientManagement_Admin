namespace PatientManagement.PatientManagement {
    export class PatientsFileUploadsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.PatientsFileUploads';

    }

    export interface PatientsFileUploadsForm {
        PatientId: Serenity.LookupEditor;
        Description: Serenity.TextAreaEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
    }

    [['PatientId', () => Serenity.LookupEditor], ['Description', () => Serenity.TextAreaEditor], ['FilePath', () => Serenity.MultipleImageUploadEditor]].forEach(x => Object.defineProperty(PatientsFileUploadsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
