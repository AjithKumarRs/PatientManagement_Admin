
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
            //this.form.SubscriptionId.changeSelect2(e => {
            //    //var customerID = this.form.SubscriptionId.value;
              
            //    //SubscriptionsService.Retrieve({
            //    //    EntityId: customerID
            //    //}, response => {
            //    //    this.setCustomerDetails(response.Entity);
            //    //});


            //    console.log("hey")
            //});
        }
        private setCustomerDetails(details: SubscriptionsRow) {

        }
        
    }
}