
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PaymentsDetailsDialog extends Serenity.EntityDialog<PaymentsDetailsRow, any> {
        protected getFormKey() { return PaymentsDetailsForm.formKey; }
        protected getIdProperty() { return PaymentsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentsDetailsRow.localTextPrefix; }
        protected getNameProperty() { return PaymentsDetailsRow.nameProperty; }
        protected getService() { return PaymentsDetailsService.baseUrl; }

        protected form = new PaymentsDetailsForm(this.idPrefix);

        onSaveSuccess(response: Serenity.SaveResponse): void {
        console.log('save');
        $('input[name=CustomerName]').val(this.form.BeneficiaryName.value);
        $('input[name=CustomerIban]').val(this.form.IbanBeneficient.value);
        }
    }
}