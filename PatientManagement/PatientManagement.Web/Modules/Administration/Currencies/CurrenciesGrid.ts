
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class CurrenciesGrid extends Serenity.EntityGrid<CurrenciesRow, any> {
        protected getColumnsKey() { return 'Administration.Currencies'; }
        protected getDialogType() { return CurrenciesDialog; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getService() { return CurrenciesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}