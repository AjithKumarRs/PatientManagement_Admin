namespace PatientManagement.PatientManagement {
    export interface PatientsForm {
        PatientId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PersonalNumber: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Picture: Serenity.ImageUploadEditor;
        Address: Serenity.StringEditor;
        Height: Serenity.IntegerEditor;
        Weight: Serenity.IntegerEditor;
        FirstRegistrationDate: Serenity.DateTimeEditor;
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
                var w4 = s.ImageUploadEditor;
                var w5 = s.DateTimeEditor;
                var w6 = BsSwitchEditor;
                var w7 = NotesEditor;
                var w8 = s.LookupEditor;

                Q.initFormType(PatientsForm, [
                    'PatientId', w0,
                    'Name', w1,
                    'Gender', w2,
                    'PersonalNumber', w1,
                    'PhoneNumber', w1,
                    'Email', w3,
                    'Picture', w4,
                    'Address', w1,
                    'Height', w0,
                    'Weight', w0,
                    'FirstRegistrationDate', w5,
                    'NotifyOnChange', w6,
                    'NoteList', w7,
                    'TenantId', w8
                ]);
            }
        }
    }
}
