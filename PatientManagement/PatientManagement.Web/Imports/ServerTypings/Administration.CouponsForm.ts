namespace PatientManagement.Administration {
    export interface CouponsForm {
        Key: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Discount: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        EndDate: Serenity.DateEditor;
        MaxTimeUsing: Serenity.IntegerEditor;
        IsUsed: Serenity.IntegerEditor;
        IsActive: BsSwitchEditor;
    }

    export class CouponsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Coupons';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CouponsForm.init)  {
                CouponsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = BsSwitchEditor;

                Q.initFormType(CouponsForm, [
                    'Key', w0,
                    'Name', w0,
                    'Discount', w1,
                    'Description', w0,
                    'EndDate', w2,
                    'MaxTimeUsing', w1,
                    'IsUsed', w1,
                    'IsActive', w3
                ]);
            }
        }
    }
}
