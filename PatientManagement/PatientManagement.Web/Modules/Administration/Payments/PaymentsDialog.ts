/// <reference types="jqueryui" />

namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentsDialog extends Serenity.EntityDialog<PaymentsRow, any> {
        protected getFormKey() { return PaymentsForm.formKey; }
        protected getIdProperty() { return PaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentsRow.localTextPrefix; }
        protected getNameProperty() { return PaymentsRow.nameProperty; }
        protected getService() { return PaymentsService.baseUrl; }

        protected form = new PaymentsForm(this.idPrefix);

        constructor() {
            super();
            this.form.PaymentOptionId.changeSelect2(e => {
                     this.CheckIfFieldsAreEmpty();
            });

            this.form.SubscriptionId.changeSelect2(e => {
                this.CheckIfFieldsAreEmpty();
            });

            this.form.CurrencyId.changeSelect2(e => {
                this.CheckIfFieldsAreEmpty();
            });
        }
        loadEntity(entity: SentEmailsRow) {
            super.loadEntity(entity);
            if (this.isNew()) {
                Serenity.EditorUtils.setReadOnly(this.form.PaymentStatus, true);
            }
        }
        protected CheckIfFieldsAreEmpty() : void {
            if (this.form.SubscriptionId.value && this.form.PaymentOptionId.value && this.form.CurrencyId.value) {
                $.get('../Administration/Payments/GetPrice',
                    {
                        SubscriptionId: this.form.SubscriptionId.value,
                        PaymentOptionId: this.form.PaymentOptionId.value,
                        CurrencyId: this.form.CurrencyId.value
                    }, function (price) {
                    
                        $("input[name='Value']").val(price);
                });
            }
        }

        private setCustomerDetails(details: SubscriptionsRow) {

        }
        
    }
}