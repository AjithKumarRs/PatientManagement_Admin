namespace PatientManagement.PatientManagement {
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
        TenantId: Serenity.LookupEditor;
    }

    export class PatientsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Patients';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatientsForm.init)  {
                PatientsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.EmailEditor;
                var w4 = s.DateTimeEditor;
                var w5 = BsSwitchEditor;
                var w6 = NotesEditor;
                var w7 = s.LookupEditor;

                Q.initFormType(PatientsForm, [
                    'PatientId', w0,
                    'Name', w1,
                    'Gender', w2,
                    'PersonalNumber', w1,
                    'PhoneNumber', w1,
                    'Email', w3,
                    'FirstRegistrationDate', w4,
                    'Address', w1,
                    'Height', w0,
                    'Weight', w0,
                    'NotifyOnChange', w5,
                    'NoteList', w6,
                    'TenantId', w7
                ]);
            }
        }
    }
}
