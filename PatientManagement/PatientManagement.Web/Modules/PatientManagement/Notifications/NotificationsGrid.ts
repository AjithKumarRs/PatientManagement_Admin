
namespace PatientManagement.PatientManagement {
    import fld = NotificationsRow.Fields;
    @Serenity.Decorators.registerClass()
    export class NotificationsGrid extends Serenity.EntityGrid<NotificationsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Notifications'; }
        protected getDialogType() { return NotificationsDialog; }
        protected getIdProperty() { return NotificationsRow.idProperty; }
        protected getLocalTextPrefix() { return NotificationsRow.localTextPrefix; }
        protected getService() { return NotificationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, {
                field: Q.text("Site.Notifications.NotificationsPageGridMarkAsSeen"),
                name: '',
                format: ctx => '<a class="inline-action mark-as-seen-row" style="font-size: 20px;" title="' + Q.text("Site.Notifications.NotificationsPageGridMarkAsSeen")+'">' +
                    '<i class="fa fa-check-square-o text-green"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });


            return columns;
        }
        protected getItemCssClass(item: NotificationsRow, index: number): string {
            let klass: string = "";
            klass = super.getItemCssClass(item, index);
            var seen = NotificationsRow.getLookup().itemById[item.NotificationId];
            
            if (seen != null && seen.SeenByUser) {
                klass += " notification-seen-by-user";
            } else {
                klass += " notification-not-seen-by-user";

            }
            return Q.trimToNull(klass);
        }
        protected getButtons(): Serenity.ToolButton[] {
        
            var buttons = super.getButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                hint: 'Export to Excel',
                title: 'Export to Excel',
                service: NotificationsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            return buttons;
        }

        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 55;
            return opt;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('mark-as-seen-row')) {
                    PatientManagement.NotificationsService.MarkAsSeen({ EntityId: item.NotificationId },
                        resp => {
                            this.refresh();
                            Q.reloadLookup(NotificationsRow.lookupKey);
                        });

                }
            }
        }
    }
}