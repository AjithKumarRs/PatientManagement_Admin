
namespace PatientManagement.Administration {
    import fld = SentEmailsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SubscriptionsGrid extends Serenity.EntityGrid<SubscriptionsRow, any> {
        protected getColumnsKey() { return 'Administration.Subscriptions'; }
        protected getDialogType() { return SubscriptionsDialog; }
        protected getIdProperty() { return SubscriptionsRow.idProperty; }
        protected getLocalTextPrefix() { return SubscriptionsRow.localTextPrefix; }
        protected getService() { return SubscriptionsService.baseUrl; }
        protected getIsActiveProperty() { return OffersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            columns.splice(2,
                0,
                {
                    field: 'Payment Chart',
                    name: '',
                    format: ctx => '<a class="inline-action open-diagram-payments" title="Кликни за дата на изтичане">' +
                        '<i class="stock-symbol"></i> Заплатен до</a>',
                    width: 176,
                    minWidth: 54,
                    maxWidth: 176
                });

            return columns;
        }

        protected getItemCssClass(item: SubscriptionsRow, index: number): string {
            let klass: string = "";

            if (item.Enabled == 1) {
                klass += " active";
            }

            return Q.trimToNull(klass);
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("open-diagram-payments")) {
                e.preventDefault();
                $.get("../../Administration/Subscriptions/GetPayments?subscriptionId=" + item.SubscriptionId,
                    data => {
                        console.log(data);
                        var date = new Date(data.SubscriptionPayedPeriod);
                        target.removeClass('open-diagram-payments');
                        target.html('<i class="stock-symbol"></i> ' + date.toLocaleDateString('bg'));
                      
                    });

            }
        }
    }
}