namespace PatientManagement.PatientManagement {
    export interface CabinetsForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
        WorkDays: Serenity.LookupEditor;
        Representatives: Serenity.LookupEditor;
        Description: Serenity.HtmlContentEditor;
        PhoneNumber: Serenity.IntegerEditor;
        City: AddressAutocomplete;
        TenantId: Serenity.IntegerEditor;
    }

    export class CabinetsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Cabinets';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CabinetsForm.init)  {
                CabinetsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TimeEditor;
                var w2 = s.LookupEditor;
                var w3 = s.HtmlContentEditor;
                var w4 = s.IntegerEditor;
                var w5 = AddressAutocomplete;

                Q.initFormType(CabinetsForm, [
                    'Name', w0,
                    'WorkHoursStart', w1,
                    'WorkHoursEnd', w1,
                    'WorkDays', w2,
                    'Representatives', w2,
                    'Description', w3,
                    'PhoneNumber', w4,
                    'City', w5,
                    'TenantId', w4
                ]);
            }
        }
    }
}
