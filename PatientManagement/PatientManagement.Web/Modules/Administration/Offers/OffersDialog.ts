
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class OffersDialog extends Serenity.EntityDialog<OffersRow, any> {
        protected getFormKey() { return OffersForm.formKey; }
        protected getIdProperty() { return OffersRow.idProperty; }
        protected getLocalTextPrefix() { return OffersRow.localTextPrefix; }
        protected getNameProperty() { return OffersRow.nameProperty; }
        protected getService() { return OffersService.baseUrl; }

        protected form = new OffersForm(this.idPrefix);

    }
}