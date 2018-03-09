namespace PatientManagement.PatientManagement {
    export interface PatientsForm {
        PatientId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        PhoneNumber: Serenity.StringEditor;
        PersonalNumber: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Address: Serenity.StringEditor;
        City: AddressAutocompleteNoMap;
        Country: AddressAutocompleteNoMap;
        Picture: Serenity.ImageUploadEditor;
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
                var w4 = AddressAutocompleteNoMap;
                var w5 = s.ImageUploadEditor;
                var w6 = s.DateTimeEditor;
                var w7 = BsSwitchEditor;
                var w8 = NotesEditor;
                var w9 = s.LookupEditor;

                Q.initFormType(PatientsForm, [
                    'PatientId', w0,
                    'Name', w1,
                    'Gender', w2,
                    'PhoneNumber', w1,
                    'PersonalNumber', w1,
                    'Email', w3,
                    'Address', w1,
                    'City', w4,
                    'Country', w4,
                    'Picture', w5,
                    'Height', w0,
                    'Weight', w0,
                    'FirstRegistrationDate', w6,
                    'NotifyOnChange', w7,
                    'NoteList', w8,
                    'TenantId', w9
                ]);
            }
        }
    }
}
