
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class CouponsGrid extends Serenity.EntityGrid<CouponsRow, any> {
        protected getColumnsKey() { return 'Administration.Coupons'; }
        protected getDialogType() { return CouponsDialog; }
        protected getIdProperty() { return CouponsRow.idProperty; }
        protected getLocalTextPrefix() { return CouponsRow.localTextPrefix; }
        protected getService() { return CouponsService.baseUrl; }
        protected getIsActiveProperty() { return CouponsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}