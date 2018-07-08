
namespace PatientManagement.PatientManagement {
    import fields = VisitsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VisitsGrid extends Serenity.EntityGrid<VisitsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Visits'; }
        protected getDialogType() { return VisitsDialog; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getService() { return VisitsService.baseUrl; }
        protected getIsActiveProperty() { return VisitTypesRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            if (Q.Authorization.hasPermission("AdministrationTenants:VisitPayments:Read")) {
                // need to register this plugin for grouping or you'll have errors

                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Price')
                    ]
                });
            }
            return grid;
        }
        protected getButtons() {
            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");

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
            buttons.push({
                title: text +  Q.text("Db.PatientManagement.VisitTypes.EntitySingular"),
                cssClass: 'expand-all-button',
                separator: true,
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'VisitTypeName'
                        }
                    ])
            });

            buttons.push({
                title: text +  Q.text("Db.PatientManagement.Patients.EntitySingular"),
                cssClass: 'expand-all-button',
                separator: true,
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'PatientName'
                        }
                    ])
            });

            buttons.push({
                title: Q.text("Site.NoGroupingButton"),
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            });
            return buttons;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            var cookie = $.cookie("CabinetPreference");
            if (cookie) {

                Q.first(filters, x => x.field == fields.CabinetId).init = w => {
                    (w as Serenity.IntegerEditor).value = cookie;

                    if(Authorization.userDefinition.RestrictedToCabinets == 1)
                        (w as Serenity.IntegerEditor).element.prop('readonly', true);
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