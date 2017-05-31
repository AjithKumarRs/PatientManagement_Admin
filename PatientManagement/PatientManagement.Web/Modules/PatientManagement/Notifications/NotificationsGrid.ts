
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class NotificationsGrid extends Serenity.EntityGrid<NotificationsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Notifications'; }
        protected getDialogType() { return NotificationsDialog; }
        protected getIdProperty() { return NotificationsRow.idProperty; }
        protected getLocalTextPrefix() { return NotificationsRow.localTextPrefix; }
        protected getService() { return NotificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}