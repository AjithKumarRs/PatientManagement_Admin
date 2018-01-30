namespace PatientManagement.Administration {
    export interface ExternalAccessForm {
        Name: Serenity.StringEditor;
        ExternalAccessCabinets: Serenity.LookupEditor;
        AccessType: Serenity.EnumEditor;
        OutputFormat: Serenity.EnumEditor;
    }

    export class ExternalAccessForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.ExternalAccess';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExternalAccessForm.init)  {
                ExternalAccessForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(ExternalAccessForm, [
                    'Name', w0,
                    'ExternalAccessCabinets', w1,
                    'AccessType', w2,
                    'OutputFormat', w2
                ]);
            }
        }
    }
}
