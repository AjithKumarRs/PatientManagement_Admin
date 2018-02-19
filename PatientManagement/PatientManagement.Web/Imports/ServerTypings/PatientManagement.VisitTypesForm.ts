namespace PatientManagement.PatientManagement {
    export interface VisitTypesForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
        ShowInMenu: BsSwitchEditor;
        Price: Serenity.DecimalEditor;
        CurrencyId: Serenity.LookupEditor;
        TenantId: Serenity.LookupEditor;
        IsActive: BsSwitchEditor;
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
                var w1 = BsSwitchEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(VisitTypesForm, [
                    'Name', w0,
                    'BorderColor', w0,
                    'BackgroundColor', w0,
                    'ShowInMenu', w1,
                    'Price', w2,
                    'CurrencyId', w3,
                    'TenantId', w3,
                    'IsActive', w1
                ]);
            }
        }
    }
}
