
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NotificationsDialog extends Serenity.EntityDialog<NotificationsRow, any> {
        protected getFormKey() { return NotificationsForm.formKey; }
        protected getIdProperty() { return NotificationsRow.idProperty; }
        protected getLocalTextPrefix() { return NotificationsRow.localTextPrefix; }
        protected getNameProperty() { return NotificationsRow.nameProperty; }
        protected getService() { return NotificationsService.baseUrl; }

        protected form = new NotificationsForm(this.idPrefix);

    }
}