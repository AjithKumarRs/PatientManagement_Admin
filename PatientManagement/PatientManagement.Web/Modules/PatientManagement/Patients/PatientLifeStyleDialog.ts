/// <reference path="../LifeStyles/LifeStylesDialog.ts" />


namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class PatientLifeStyleDialog extends LifeStylesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
        }
    }
}