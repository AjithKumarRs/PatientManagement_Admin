namespace PatientManagement.Administration {
    export interface OffersForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Price: Serenity.DecimalEditor;
        IsPublic: BsSwitchEditor;
        Enabled: BsSwitchEditor;
        CurrencyId: Serenity.LookupEditor;
        RoleId: Serenity.LookupEditor;
        ExpirationDate: Serenity.DateTimeEditor;
        MaximumSubscriptionTime: Serenity.IntegerEditor;
        MaximumUsersPerTenant: Serenity.IntegerEditor;
        MaximumVisitsPerTenant: Serenity.IntegerEditor;
        MaximumPatientsPerTenant: Serenity.IntegerEditor;
        MaximumCabinets: Serenity.IntegerEditor;
    }

    export class OffersForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Offers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OffersForm.init)  {
                OffersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;
                var w3 = BsSwitchEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DateTimeEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(OffersForm, [
                    'Name', w0,
                    'Description', w1,
                    'Price', w2,
                    'IsPublic', w3,
                    'Enabled', w3,
                    'CurrencyId', w4,
                    'RoleId', w4,
                    'ExpirationDate', w5,
                    'MaximumSubscriptionTime', w6,
                    'MaximumUsersPerTenant', w6,
                    'MaximumVisitsPerTenant', w6,
                    'MaximumPatientsPerTenant', w6,
                    'MaximumCabinets', w6
                ]);
            }
        }
    }
}
