namespace PatientManagement.PatientManagement {
    export interface UserNotificationsForm {
        NotificationId: Serenity.IntegerEditor;
        SeenAt: Serenity.DateEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class UserNotificationsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.UserNotifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserNotificationsForm.init)  {
                UserNotificationsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(UserNotificationsForm, [
                    'NotificationId', w0,
                    'SeenAt', w1,
                    'UserId', w0
                ]);
            }
        }
    }
}
