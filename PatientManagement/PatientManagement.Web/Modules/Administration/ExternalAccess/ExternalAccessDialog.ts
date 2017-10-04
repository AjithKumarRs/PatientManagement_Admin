
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ExternalAccessDialog extends Serenity.EntityDialog<ExternalAccessRow, any> {
        protected getFormKey() { return ExternalAccessForm.formKey; }
        protected getIdProperty() { return ExternalAccessRow.idProperty; }
        protected getLocalTextPrefix() { return ExternalAccessRow.localTextPrefix; }
        protected getNameProperty() { return ExternalAccessRow.nameProperty; }
        protected getService() { return ExternalAccessService.baseUrl; }

        protected form = new ExternalAccessForm(this.idPrefix);

    }
}