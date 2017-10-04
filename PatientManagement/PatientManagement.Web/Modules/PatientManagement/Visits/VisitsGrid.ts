
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

            buttons.push(Common.IcsExportHelper.createToolButton({
                grid: this,
                hint: 'Export to Outlook, Google Calendar etc.',
                title: 'Export to Outlook, Google Calendar etc.',
                service: VisitsService.baseUrl + '/ListIcs',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
            }));

            return buttons;
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            var cookie = $.cookie("CabinetPreference");
            let fields = VisitsRow.Fields;
            if (cookie) {

                Q.first(filters, x => x.field == fields.CabinetId).init = w => {
                    (w as Serenity.IntegerEditor).value = cookie;

                    //TODO: When permission for all cabinets is added uncoment 
                    // (w as Serenity.IntegerEditor).element.prop('readonly', true);
                };
            }

            var q = Q.parseQueryString();
            if (q["visittype"]) {
                var category = Q.tryFirst(filters, x => x.field == fields.VisitTypeId);
                category.init = e => {
                    e.element.getWidget(Serenity.LookupEditor).value = q["visittype"];
                };
            }
            return filters;
        }
    }
}