namespace PatientManagement.Administration {
    export class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.SentEmails';

    }

    export interface SentEmailsForm {
        ToEmail: LKCodeDescr;
        Subject: Serenity.StringEditor;
        Body: Serenity.HtmlContentEditor;
    }

    [['ToEmail', () => LKCodeDescr], ['Subject', () => Serenity.StringEditor], ['Body', () => Serenity.HtmlContentEditor]].forEach(x => Object.defineProperty(SentEmailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
