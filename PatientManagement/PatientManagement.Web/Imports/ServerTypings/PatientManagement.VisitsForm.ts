namespace PatientManagement.PatientManagement {
    export interface VisitsForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        AssignedUserId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        FreeForReservation: BsSwitchEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        RepeatTimes: Serenity.IntegerEditor;
        RepeatPeriod: Serenity.EnumEditor;
        RepeatUntilEndDate: Serenity.StringEditor;
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
                var w3 = s.IntegerEditor;
                var w4 = s.EnumEditor;
                var w5 = s.StringEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.TextAreaEditor;

                Q.initFormType(VisitsForm, [
                    'PatientId', w0,
                    'VisitTypeId', w0,
                    'AssignedUserId', w0,
                    'CabinetId', w0,
                    'FreeForReservation', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'RepeatTimes', w3,
                    'RepeatPeriod', w4,
                    'RepeatUntilEndDate', w5,
                    'Price', w6,
                    'VisitTypeCurrencyName', w5,
                    'Description', w7,
                    'TenantId', w3
                ]);
            }
        }
    }
}
