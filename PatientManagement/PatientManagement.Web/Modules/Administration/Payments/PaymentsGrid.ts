
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class PaymentsGrid extends Serenity.EntityGrid<PaymentsRow, any> {
        protected getColumnsKey() { return 'Administration.Payments'; }
        protected getDialogType() { return PaymentsDialog; }
        protected getIdProperty() { return PaymentsRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentsRow.localTextPrefix; }
        protected getService() { return PaymentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            
        }
    }
}