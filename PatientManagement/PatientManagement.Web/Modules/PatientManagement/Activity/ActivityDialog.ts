
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ActivityDialog extends Serenity.EntityDialog<ActivityRow, any> {
        protected getFormKey() { return ActivityForm.formKey; }
        protected getIdProperty() { return ActivityRow.idProperty; }
        protected getLocalTextPrefix() { return ActivityRow.localTextPrefix; }
        protected getNameProperty() { return ActivityRow.nameProperty; }
        protected getService() { return ActivityService.baseUrl; }

        protected form = new ActivityForm(this.idPrefix);
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