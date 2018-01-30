namespace PatientManagement.PatientManagement {
    export interface VisitsForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        AssignedUserId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
        TenantId: Serenity.LookupEditor;
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
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(VisitsForm, [
                    'PatientId', w0,
                    'VisitTypeId', w0,
                    'AssignedUserId', w0,
                    'CabinetId', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Description', w2,
                    'TenantId', w0
                ]);
            }
        }
    }
}
