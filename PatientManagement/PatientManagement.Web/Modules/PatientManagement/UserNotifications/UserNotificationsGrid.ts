
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class UserNotificationsGrid extends Serenity.EntityGrid<UserNotificationsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.UserNotifications'; }
        protected getDialogType() { return UserNotificationsDialog; }
        protected getIdProperty() { return UserNotificationsRow.idProperty; }
        protected getLocalTextPrefix() { return UserNotificationsRow.localTextPrefix; }
        protected getService() { return UserNotificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}