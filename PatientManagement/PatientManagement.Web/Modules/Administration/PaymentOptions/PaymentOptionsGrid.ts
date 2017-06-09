
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class PaymentOptionsGrid extends Serenity.EntityGrid<PaymentOptionsRow, any> {
        protected getColumnsKey() { return 'Administration.PaymentOptions'; }
        protected getDialogType() { return PaymentOptionsDialog; }
        protected getIdProperty() { return PaymentOptionsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentOptionsRow.localTextPrefix; }
        protected getService() { return PaymentOptionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}