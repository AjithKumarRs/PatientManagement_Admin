
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class PatientsGrid extends Serenity.EntityGrid<PatientsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Patients'; }
        protected getDialogType() { return PatientsDialog; }
        protected getIdProperty() { return PatientsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsRow.localTextPrefix; }
        protected getService() { return PatientsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}