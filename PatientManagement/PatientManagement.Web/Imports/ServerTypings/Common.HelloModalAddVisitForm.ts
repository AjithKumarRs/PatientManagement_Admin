namespace PatientManagement.Common {
    export interface HelloModalAddVisitForm {
        PatientId: Serenity.LookupEditor;
        VisitTypeId: Serenity.LookupEditor;
        CabinetId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        EndDate: Serenity.DateTimeEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class HelloModalAddVisitForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddVisit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HelloModalAddVisitForm.init)  {
                HelloModalAddVisitForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(HelloModalAddVisitForm, [
                    'PatientId', w0,
                    'VisitTypeId', w0,
                    'CabinetId', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
