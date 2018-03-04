namespace PatientManagement.Administration {
    export interface SentEmailsForm {
        ToEmail: PatientManagement.LKCodeDescr;
        Subject: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
        EmailSignature: Serenity.HtmlContentEditor;
    }

    export class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.SentEmails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SentEmailsForm.init)  {
                SentEmailsForm.init = true;

                var s = Serenity;
                var w0 = PatientManagement.LKCodeDescr;
                var w1 = s.StringEditor;
                var w2 = s.HtmlContentEditor;

                Q.initFormType(SentEmailsForm, [
                    'ToEmail', w0,
                    'Subject', w1,
                    'Body', w2,
                    'EmailSignature', w2
                ]);
            }
        }
    }
}
