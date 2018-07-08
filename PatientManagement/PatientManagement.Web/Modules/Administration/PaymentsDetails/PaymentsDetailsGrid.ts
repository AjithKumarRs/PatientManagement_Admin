
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class PaymentsDetailsGrid extends Serenity.EntityGrid<PaymentsDetailsRow, any> {
        protected getColumnsKey() { return 'Administration.PaymentsDetails'; }
        protected getDialogType() { return PaymentsDetailsDialog; }
        protected getIdProperty() { return PaymentsDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentsDetailsRow.localTextPrefix; }
        protected getService() { return PaymentsDetailsService.baseUrl; }
        protected getIsActiveProperty() { return PaymentsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}