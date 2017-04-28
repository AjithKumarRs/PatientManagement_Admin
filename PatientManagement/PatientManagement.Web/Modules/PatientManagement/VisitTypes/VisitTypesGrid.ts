
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class VisitTypesGrid extends Serenity.EntityGrid<VisitTypesRow, any> {
        protected getColumnsKey() { return 'PatientManagement.VisitTypes'; }
        protected getDialogType() { return VisitTypesDialog; }
        protected getIdProperty() { return VisitTypesRow.idProperty; }
        protected getLocalTextPrefix() { return VisitTypesRow.localTextPrefix; }
        protected getService() { return VisitTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}