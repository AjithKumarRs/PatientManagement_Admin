
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CouponsDialog extends Serenity.EntityDialog<CouponsRow, any> {
        protected getFormKey() { return CouponsForm.formKey; }
        protected getIdProperty() { return CouponsRow.idProperty; }
        protected getLocalTextPrefix() { return CouponsRow.localTextPrefix; }
        protected getNameProperty() { return CouponsRow.nameProperty; }
        protected getService() { return CouponsService.baseUrl; }

        protected form = new CouponsForm(this.idPrefix);

    }
}