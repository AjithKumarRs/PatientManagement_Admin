
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PatientHealthDialog extends Serenity.EntityDialog<PatientHealthRow, any> {
        protected getFormKey() { return PatientHealthForm.formKey; }
        protected getIdProperty() { return PatientHealthRow.idProperty; }
        protected getLocalTextPrefix() { return PatientHealthRow.localTextPrefix; }
        protected getNameProperty() { return PatientHealthRow.nameProperty; }
        protected getService() { return PatientHealthService.baseUrl; }

        protected form = new PatientHealthForm(this.idPrefix);

    }
}