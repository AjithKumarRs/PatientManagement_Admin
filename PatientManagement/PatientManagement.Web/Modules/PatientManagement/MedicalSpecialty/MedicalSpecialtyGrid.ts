
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class MedicalSpecialtyGrid extends Serenity.EntityGrid<MedicalSpecialtyRow, any> {
        protected getColumnsKey() { return 'PatientManagement.MedicalSpecialty'; }
        protected getDialogType() { return MedicalSpecialtyDialog; }
        protected getIdProperty() { return MedicalSpecialtyRow.idProperty; }
        protected getLocalTextPrefix() { return MedicalSpecialtyRow.localTextPrefix; }
        protected getService() { return MedicalSpecialtyService.baseUrl; }
        protected getIsActiveProperty() { return MedicalSpecialtyRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();
            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: 'Export to Excel',
                hint: 'Export to Excel',
                grid: this,
                service: MedicalSpecialtyService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new MedicalSpecialtyExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }
    }
}