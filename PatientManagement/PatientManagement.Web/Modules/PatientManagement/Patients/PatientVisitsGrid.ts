/// <reference path="../Visits/VisitsGrid.ts" />

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class PatientVisitsGrid extends VisitsGrid {
        protected getDialogType() { return PatientVisitsDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            let fld = VisitsRow.Fields;
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            console.log(this.patientId);
            this.editItem({ PatientId: this.patientId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.patientId;
        }

        private _patientId: number;

        get patientId() {
            return this._patientId;
        }

        set patientId(value: number) {
            if (this._patientId !== value) {
                this._patientId = value;
                this.setEquality('PatientId', value);
                this.refresh();
            }
        }
    } 
}