namespace PatientManagement.PatientManagement {
    export interface VisitsForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        AssignedUserId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        FreeForReservation: BsSwitchEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Price: Serenity.DecimalEditor;
        VisitTypeCurrencyName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class VisitsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Visits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VisitsForm.init)  {
                VisitsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = BsSwitchEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.StringEditor;
                var w5 = s.TextAreaEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(VisitsForm, [
                    'PatientId', w0,
                    'VisitTypeId', w0,
                    'AssignedUserId', w0,
                    'CabinetId', w0,
                    'FreeForReservation', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'Price', w3,
                    'VisitTypeCurrencyName', w4,
                    'Description', w5,
                    'TenantId', w6
                ]);
            }
        }
    }
}
