
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class LifeStylesGrid extends Serenity.EntityGrid<LifeStylesRow, any> {
        protected getColumnsKey() { return 'PatientManagement.LifeStyles'; }
        protected getDialogType() { return LifeStylesDialog; }
        protected getIdProperty() { return LifeStylesRow.idProperty; }
        protected getLocalTextPrefix() { return LifeStylesRow.localTextPrefix; }
        protected getService() { return LifeStylesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}