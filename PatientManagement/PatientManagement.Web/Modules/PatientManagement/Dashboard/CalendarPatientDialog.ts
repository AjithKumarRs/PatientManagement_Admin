/// <reference path="../Patients/PatientsDialog.ts" />

namespace PatientManagement.PatientManagement {
    @Serenity.Decorators.panel(false)

    @Serenity.Decorators.registerClass()
    export class CalendarPatientDialog extends PatientsDialog {

        public onSaveSuccess(response: Serenity.SaveResponse): void {
            $("#calendar").fullCalendar('refetchEvents');
        }

        loadEntity(entity: PatientsRow) {
            super.loadEntity(entity);
                Serenity.EditorUtils.setReadOnly(this.form.Name, true);
            Q.initFullHeightGridPage(this.element);
        }
    }
}