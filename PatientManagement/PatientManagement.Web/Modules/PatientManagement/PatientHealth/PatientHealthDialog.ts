
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PatientHealthDialog extends Serenity.EntityDialog<PatientHealthRow, any> {
        protected getFormKey() { return PatientHealthForm.formKey; }
        protected getIdProperty() { return PatientHealthRow.idProperty; }
        protected getLocalTextPrefix() { return PatientHealthRow.localTextPrefix; }
        protected getNameProperty() { return PatientHealthRow.nameProperty; }
        protected getService() { return PatientHealthService.baseUrl; }

        protected form = new PatientHealthForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }


        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }


        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    }
}