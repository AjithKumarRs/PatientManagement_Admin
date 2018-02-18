namespace PatientManagement.PatientManagement {
    export interface VisitTypesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        TenantId: Serenity.LookupEditor;
    }

    export class VisitTypesForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.VisitTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VisitTypesForm.init)  {
                VisitTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(VisitTypesForm, [
                    'Name', w0,
                    'BorderColor', w0,
                    'BackgroundColor', w0,
                    'Price', w1,
                    'CurrencyId', w2,
                    'TenantId', w2
                ]);
            }
        }
    }
}
