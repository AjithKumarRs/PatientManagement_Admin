/// <reference path="../Patients/PatientsDialog.ts" />

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class CalendarPatientDialog extends PatientsDialog {


        loadEntity(entity: PatientsRow) {
            super.loadEntity(entity);
            console.log("something");
                Serenity.EditorUtils.setReadOnly(this.form.Name, true);
    
        }
    }
}