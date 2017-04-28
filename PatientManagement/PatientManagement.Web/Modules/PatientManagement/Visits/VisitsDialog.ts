
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class VisitsDialog extends Serenity.EntityDialog<VisitsRow, any> {
        protected getFormKey() { return VisitsForm.formKey; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getService() { return VisitsService.baseUrl; }

        protected form = new VisitsForm(this.idPrefix);

    }
}