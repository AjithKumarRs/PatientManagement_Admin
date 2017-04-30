
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PatientsFileUploadsDialog extends Serenity.EntityDialog<PatientsFileUploadsRow, any> {
        protected getFormKey() { return PatientsFileUploadsForm.formKey; }
        protected getIdProperty() { return PatientsFileUploadsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsFileUploadsRow.localTextPrefix; }
        protected getNameProperty() { return PatientsFileUploadsRow.nameProperty; }
        protected getService() { return PatientsFileUploadsService.baseUrl; }

        protected form = new PatientsFileUploadsForm(this.idPrefix);

    }
}