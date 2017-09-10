namespace PatientManagement.PatientManagement {
    export class NotificationsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Notifications';

    }

    export interface NotificationsForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['EntityType', () => Serenity.StringEditor], ['EntityId', () => Serenity.StringEditor], ['Text', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(NotificationsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
