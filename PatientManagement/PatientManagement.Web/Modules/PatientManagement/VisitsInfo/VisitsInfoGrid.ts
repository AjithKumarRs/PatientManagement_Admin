
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class VisitsInfoGrid extends Serenity.EntityGrid<VisitsInfoRow, any> {
        protected getColumnsKey() { return 'PatientManagement.VisitsInfo'; }
        protected getDialogType() { return VisitsInfoDialog; }
        protected getIdProperty() { return VisitsInfoRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsInfoRow.localTextPrefix; }
        protected getService() { return VisitsInfoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}