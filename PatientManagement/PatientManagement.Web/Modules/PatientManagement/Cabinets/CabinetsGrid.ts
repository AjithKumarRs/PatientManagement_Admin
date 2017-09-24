
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class CabinetsGrid extends Serenity.EntityGrid<CabinetsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Cabinets'; }
        protected getDialogType() { return CabinetsDialog; }
        protected getIdProperty() { return CabinetsRow.idProperty; }
        protected getLocalTextPrefix() { return CabinetsRow.localTextPrefix; }
        protected getIsActiveProperty() { return CabinetsRow.isActiveProperty; }
        protected getService() { return CabinetsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}