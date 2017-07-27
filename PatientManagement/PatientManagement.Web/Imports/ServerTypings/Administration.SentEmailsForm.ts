

namespace PatientManagement.Administration {
    export class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.SentEmails';
    }

    export interface SentEmailsForm {
        FromEmail: Serenity.StringEditor;
        FromName: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        ToEmail: Serenity.StringEditor;
        ToName: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDateField: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['FromEmail', () => Serenity.StringEditor], ['FromName', () => Serenity.StringEditor], ['Subject', () => Serenity.StringEditor], ['Body', () => Serenity.StringEditor], ['ToEmail', () => Serenity.StringEditor], ['ToName', () => Serenity.StringEditor], ['TenantId', () => Serenity.IntegerEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDateField', () => Serenity.DateEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SentEmailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}