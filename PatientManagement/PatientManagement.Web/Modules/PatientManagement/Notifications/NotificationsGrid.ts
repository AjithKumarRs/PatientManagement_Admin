
namespace PatientManagement.PatientManagement {
    
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

    }
}