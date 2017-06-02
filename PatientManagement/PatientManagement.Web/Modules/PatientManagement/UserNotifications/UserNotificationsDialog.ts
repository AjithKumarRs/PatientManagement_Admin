
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class UserNotificationsDialog extends Serenity.EntityDialog<UserNotificationsRow, any> {
        protected getFormKey() { return UserNotificationsForm.formKey; }
        protected getIdProperty() { return UserNotificationsRow.idProperty; }
        protected getLocalTextPrefix() { return UserNotificationsRow.localTextPrefix; }
        protected getService() { return UserNotificationsService.baseUrl; }

        protected form = new UserNotificationsForm(this.idPrefix);

    }
}