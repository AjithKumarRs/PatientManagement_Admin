/// <reference path="../PatientsFileUploads/PatientsFileUploadsDialog.ts" />


namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class PatientHealthCheckDialog extends PatientHealthDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
        }
    }
}