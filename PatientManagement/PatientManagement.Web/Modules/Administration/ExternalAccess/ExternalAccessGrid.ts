
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class ExternalAccessGrid extends Serenity.EntityGrid<ExternalAccessRow, any> {
        protected getColumnsKey() { return 'Administration.ExternalAccess'; }
        protected getDialogType() { return ExternalAccessDialog; }
        protected getIdProperty() { return ExternalAccessRow.idProperty; }
        protected getLocalTextPrefix() { return ExternalAccessRow.localTextPrefix; }
        protected getService() { return ExternalAccessService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}