namespace PatientManagement.Common {
    export interface HelloModalAddCabinetForm {
        Name: Serenity.StringEditor;
        WorkHoursStart: Serenity.TimeEditor;
        WorkHoursEnd: Serenity.TimeEditor;
    }

    export class HelloModalAddCabinetForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddCabinet';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HelloModalAddCabinetForm.init)  {
                HelloModalAddCabinetForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TimeEditor;

                Q.initFormType(HelloModalAddCabinetForm, [
                    'Name', w0,
                    'WorkHoursStart', w1,
                    'WorkHoursEnd', w1
                ]);
            }
        }
    }
}
