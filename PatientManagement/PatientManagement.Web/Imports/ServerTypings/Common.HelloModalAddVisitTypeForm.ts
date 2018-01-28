namespace PatientManagement.Common {
    export interface HelloModalAddVisitTypeForm {
        Name: Serenity.StringEditor;
        BorderColor: Serenity.StringEditor;
        BackgroundColor: Serenity.StringEditor;
    }

    export class HelloModalAddVisitTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Common.HelloModalAddVisitType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HelloModalAddVisitTypeForm.init)  {
                HelloModalAddVisitTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(HelloModalAddVisitTypeForm, [
                    'Name', w0,
                    'BorderColor', w0,
                    'BackgroundColor', w0
                ]);
            }
        }
    }
}
