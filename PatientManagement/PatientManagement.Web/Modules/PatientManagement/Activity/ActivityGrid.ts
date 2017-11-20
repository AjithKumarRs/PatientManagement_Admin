
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class ActivityGrid extends Serenity.EntityGrid<ActivityRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Activity'; }
        protected getDialogType() { return ActivityDialog; }
        protected getIdProperty() { return ActivityRow.idProperty; }
        protected getLocalTextPrefix() { return ActivityRow.localTextPrefix; }
        protected getService() { return ActivityService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}