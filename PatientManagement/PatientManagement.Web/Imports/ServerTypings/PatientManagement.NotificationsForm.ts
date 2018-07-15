namespace PatientManagement.PatientManagement {
    export interface NotificationsForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.StringEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.LookupEditor;
        InsertDate: Serenity.DateEditor;
    }

    export class NotificationsForm extends Serenity.PrefixedContext {
        static formKey = 'PatientManagement.Notifications';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NotificationsForm.init)  {
                NotificationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NotificationsForm, [
                    'EntityType', w0,
                    'EntityId', w0,
                    'Text', w0,
                    'InsertUserId', w1,
                    'InsertDate', w2
                ]);
            }
        }
    }
}
