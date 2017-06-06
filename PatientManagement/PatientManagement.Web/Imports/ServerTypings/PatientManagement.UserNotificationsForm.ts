

namespace PatientManagement.PatientManagement {
    export class UserNotificationsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.UserNotifications';
    }

    export interface UserNotificationsForm {
        NotificationId: Serenity.IntegerEditor;
        SeenAt: Serenity.DateEditor;
        UserId: Serenity.IntegerEditor;
    }

    [['NotificationId', () => Serenity.IntegerEditor], ['SeenAt', () => Serenity.DateEditor], ['UserId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(UserNotificationsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}