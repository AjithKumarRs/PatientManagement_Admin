
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class VisitsInfoDialog extends Serenity.EntityDialog<VisitsInfoRow, any> {
        protected getFormKey() { return VisitsInfoForm.formKey; }
        protected getIdProperty() { return VisitsInfoRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsInfoRow.localTextPrefix; }
        protected getNameProperty() { return VisitsInfoRow.nameProperty; }
        protected getService() { return VisitsInfoService.baseUrl; }

        protected form = new VisitsInfoForm(this.idPrefix);

    }
}