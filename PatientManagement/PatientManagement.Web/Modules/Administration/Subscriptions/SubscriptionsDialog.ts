
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SubscriptionsDialog extends Serenity.EntityDialog<SubscriptionsRow, any> {
        protected getFormKey() { return SubscriptionsForm.formKey; }
        protected getIdProperty() { return SubscriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return SubscriptionsRow.localTextPrefix; }
        protected getNameProperty() { return SubscriptionsRow.nameProperty; }
        protected getService() { return SubscriptionsService.baseUrl; }

        protected form = new SubscriptionsForm(this.idPrefix);

        constructor() {
            super();

            this.form.OfferId.changeSelect2(e => {
                var OfferId = Q.toId(this.form.OfferId.value);
                if (OfferId != null) {
                    this.form.FreeDaysFromOffer.value = OffersRow.getLookup().itemById[OfferId].MaximumSubscriptionTime;
                }
            });
        }

   
    }
}