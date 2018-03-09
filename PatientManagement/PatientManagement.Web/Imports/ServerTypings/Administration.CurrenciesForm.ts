namespace PatientManagement.Administration {
    export interface CurrenciesForm {
        CurrencyId: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Enabled: BsSwitchEditor;
        BaseCurrencyId: Serenity.LookupEditor;
    }

    export class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Currencies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrenciesForm.init)  {
                CurrenciesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = BsSwitchEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(CurrenciesForm, [
                    'CurrencyId', w0,
                    'Name', w0,
                    'Rate', w1,
                    'Enabled', w2,
                    'BaseCurrencyId', w3
                ]);
            }
        }
    }
}
