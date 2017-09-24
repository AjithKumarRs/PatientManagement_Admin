
namespace PatientManagement.PatientManagement {
    
    @Serenity.Decorators.registerClass()
    export class PatientsGrid extends Serenity.EntityGrid<PatientsRow, any> {
        protected getColumnsKey() { return 'PatientManagement.Patients'; }
        protected getDialogType() { return PatientsDialog; }
        protected getIdProperty() { return PatientsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsRow.localTextPrefix; }
        protected getService() { return PatientsService.baseUrl; }
        protected getIsActiveProperty() { return PatientsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                hint: 'Export to Excel',
                title: 'Export to Excel',
                service: PatientsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            return buttons;
        }

    }
}