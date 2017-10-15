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

            this.form.CouponKey.element.on("keyup", () => {
                var value = this.form.CouponKey.value;
                var options = this.form.CouponId.getSelect2Options().data;
                for (var i = 0; i < options.length; i++) {
                    if (options[i].text === value) {
                        this.form.CouponId.value = options[i].id;
                    }
                }
            });

             
            this.form.PaymentOptionId.changeSelect2(e => {
                this.CheckIfFieldsAreEmpty();

            });
            this.form.PaymentDetailsId.changeSelect2(e => {

                if (!this.form.PaymentDetailsId.value) {
                    return;
                }
                PaymentsDetailsService.Retrieve({
                    EntityId: this.form.PaymentDetailsId.value
                }, response => {
                    this.setPaymentDetails(response.Entity);
                    });

            });
            this.form.SubscriptionId.changeSelect2(e => {
                this.CheckIfFieldsAreEmpty();

                SubscriptionsService.Retrieve({
                    EntityId: this.form.SubscriptionId.value
                }, response => {
                    this.setSubscriptionDetails(response.Entity);
                });
            });

            this.form.CurrencyId.changeSelect2(e => {
                this.CheckIfFieldsAreEmpty();
                
            });
        }
        loadEntity(entity: PaymentsRow) {
            super.loadEntity(entity);

            if (this.isNew()) {


                this.SetInnerFields();

            }
            
            this.form.Receiver.value = Q.text('Site.Payments.Reciever');

            this.form.IBANReceiver.value = Q.text('Site.Payments.IBANReciever');

            this.form.BICReceiver.value = Q.text('Site.Payments.BICreciever');

            this.form.BankNameReceiver.value = Q.text('Site.Payments.BankNameReciever');

        }

        protected SetInnerFields(): void {
            Serenity.EditorUtils.setReadOnly(this.form.CustomerIban, true);
            Serenity.EditorUtils.setReadOnly(this.form.CustomerName, true);
            Serenity.EditorUtils.setReadOnly(this.form.Receiver, true);
            Serenity.EditorUtils.setReadOnly(this.form.IBANReceiver, true);
            Serenity.EditorUtils.setReadOnly(this.form.BICReceiver, true);
            Serenity.EditorUtils.setReadOnly(this.form.BankNameReceiver, true);
            Serenity.EditorUtils.setReadOnly(this.form.ReasonForPayment, true);

            Serenity.EditorUtils.setReadOnly(this.form.PaymentStatus, true);

            var subsId = this.form.SubscriptionId.getSelect2Options().data[0].id;
            this.form.SubscriptionId.value = subsId;

            if (this.form.PaymentDetailsId.getSelect2Options().data[0]) {
                var detailsId = this.form.PaymentDetailsId.getSelect2Options().data[0].id;

                this.form.PaymentDetailsId.value = detailsId;
                PaymentsDetailsService.Retrieve({
                        EntityId: detailsId
                    },
                    response => {
                        this.setPaymentDetails(response.Entity);
                    });
            }
            SubscriptionsService.Retrieve({
                EntityId: subsId
            }, response => {
                this.setSubscriptionDetails(response.Entity);
                });


            Serenity.EditorUtils.setReadOnly(this.form.SubscriptionId, true);
        }
        protected CheckIfFieldsAreEmpty(): void {
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
            if (this.form.CouponKey.value) {
                
            }
        }
        
        private setPaymentDetails(details: PaymentsDetailsRow) {
            this.form.CustomerName.value = details.BeneficiaryName;
            this.form.CustomerIban.value = details.IbanBeneficient;
        }

        private setSubscriptionDetails(details: SubscriptionsRow) {
            this.form.ReasonForPayment.value = details.Name + ' - SUBSID' + details.SubscriptionId;
        }

    }
}