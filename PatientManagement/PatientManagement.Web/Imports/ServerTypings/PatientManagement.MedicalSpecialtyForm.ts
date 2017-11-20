namespace PatientManagement.PatientManagement {
    export class MedicalSpecialtyForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.MedicalSpecialty';

    }

    export interface MedicalSpecialtyForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MedicalSpecialtyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
