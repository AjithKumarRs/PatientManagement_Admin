
namespace PatientManagement.Administration {
    
    @Serenity.Decorators.registerClass()
    export class SubscriptionsGrid extends Serenity.EntityGrid<SubscriptionsRow, any> {
        protected getColumnsKey() { return 'Administration.Subscriptions'; }
        protected getDialogType() { return SubscriptionsDialog; }
        protected getIdProperty() { return SubscriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return SubscriptionsRow.localTextPrefix; }
        protected getService() { return SubscriptionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getItemCssClass(item: SubscriptionsRow, index: number): string {
            let klass: string = "";

            if (item.Enabled == 1) {
                klass += " active";
            }

            return Q.trimToNull(klass);
        }
    }
}