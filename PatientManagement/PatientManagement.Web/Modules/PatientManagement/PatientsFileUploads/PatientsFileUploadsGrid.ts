
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class PatientsFileUploadsGrid extends Serenity.EntityGrid<PatientsFileUploadsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.PatientsFileUploads'; }
        protected getDialogType() { return PatientsFileUploadsDialog; }
        protected getIdProperty() { return PatientsFileUploadsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsFileUploadsRow.localTextPrefix; }
        protected getService() { return PatientsFileUploadsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}