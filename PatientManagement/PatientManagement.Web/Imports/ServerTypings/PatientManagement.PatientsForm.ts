namespace PatientManagement.PatientManagement {
    export class PatientsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Patients';

    }

    export interface PatientsForm {
        PatientId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        PersonalNumber: Serenity.IntegerEditor;
        PhoneNumber: Serenity.IntegerEditor;
        FirstRegistrationDate: Serenity.DateTimeEditor;
        Address: Serenity.StringEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        NoteList: NotesEditor;
    }

    [['PatientId', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['PersonalNumber', () => Serenity.IntegerEditor], ['PhoneNumber', () => Serenity.IntegerEditor], ['FirstRegistrationDate', () => Serenity.DateTimeEditor], ['Address', () => Serenity.StringEditor], ['Height', () => Serenity.IntegerEditor], ['Weight', () => Serenity.IntegerEditor], ['NoteList', () => NotesEditor]].forEach(x => Object.defineProperty(PatientsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
