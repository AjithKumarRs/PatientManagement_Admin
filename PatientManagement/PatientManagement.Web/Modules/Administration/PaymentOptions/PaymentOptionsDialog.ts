
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentOptionsDialog extends Serenity.EntityDialog<PaymentOptionsRow, any> {
        protected getFormKey() { return PaymentOptionsForm.formKey; }
        protected getIdProperty() { return PaymentOptionsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentOptionsRow.localTextPrefix; }
        protected getNameProperty() { return PaymentOptionsRow.nameProperty; }
        protected getService() { return PaymentOptionsService.baseUrl; }

        protected form = new PaymentOptionsForm(this.idPrefix);

    }
}