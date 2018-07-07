
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class PatientHealthGrid extends Serenity.EntityGrid<PatientHealthRow, any> {
        protected getColumnsKey() { return 'PatientManagement.PatientHealth'; }
        protected getDialogType() { return PatientHealthDialog; }
        protected getIdProperty() { return PatientHealthRow.idProperty; }
        protected getLocalTextPrefix() { return PatientHealthRow.localTextPrefix; }
        protected getService() { return PatientHealthService.baseUrl; }
        protected getIsActiveProperty() { return PatientHealthRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}