/// <reference path="../Activity/ActivityDialog.ts" />


namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class PatienActivityDialog extends ActivityDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
        }
    }
}