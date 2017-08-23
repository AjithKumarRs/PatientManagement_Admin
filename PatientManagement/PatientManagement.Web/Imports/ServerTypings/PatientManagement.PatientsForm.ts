namespace PatientManagement.PatientManagement {
    export class PatientsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Patients';

    }

    export interface PatientsForm {
        PatientId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PersonalNumber: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        FirstRegistrationDate: Serenity.DateTimeEditor;
        Address: Serenity.StringEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        NotifyOnChange: BsSwitchEditor;
        NoteList: NotesEditor;
    }

    [['PatientId', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Gender', () => Serenity.EnumEditor], ['PersonalNumber', () => Serenity.StringEditor], ['PhoneNumber', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['FirstRegistrationDate', () => Serenity.DateTimeEditor], ['Address', () => Serenity.StringEditor], ['Height', () => Serenity.IntegerEditor], ['Weight', () => Serenity.IntegerEditor], ['NotifyOnChange', () => BsSwitchEditor], ['NoteList', () => NotesEditor]].forEach(x => Object.defineProperty(PatientsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
