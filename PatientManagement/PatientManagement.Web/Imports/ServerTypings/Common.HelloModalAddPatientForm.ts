namespace PatientManagement.Common {
    export class HelloModalAddPatientForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddPatient';

    }

    export interface HelloModalAddPatientForm {
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        NotifyOnChange: BsSwitchEditor;
    }

    [['Name', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['NotifyOnChange', () => BsSwitchEditor]].forEach(x => Object.defineProperty(HelloModalAddPatientForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
