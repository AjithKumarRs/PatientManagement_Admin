
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class VisitsGrid extends Serenity.EntityGrid<VisitsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Visits'; }
        protected getDialogType() { return VisitsDialog; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getService() { return VisitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                hint: 'Export to Excel',
                title: 'Export to Excel',
                service: VisitsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            return buttons;
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            var cookie = $.cookie("CabinetPreference");
            if (cookie) {
                let fields = VisitsRow.Fields;

                Q.first(filters, x => x.field == fields.CabinetId).init = w => {
                    (w as Serenity.IntegerEditor).value = cookie;
                    
                };
            }

            return filters;
        }
    }
}