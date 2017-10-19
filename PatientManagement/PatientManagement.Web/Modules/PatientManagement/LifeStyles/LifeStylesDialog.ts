
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LifeStylesDialog extends Serenity.EntityDialog<LifeStylesRow, any> {
        protected getFormKey() { return LifeStylesForm.formKey; }
        protected getIdProperty() { return LifeStylesRow.idProperty; }
        protected getLocalTextPrefix() { return LifeStylesRow.localTextPrefix; }
        protected getNameProperty() { return LifeStylesRow.nameProperty; }
        protected getService() { return LifeStylesService.baseUrl; }

        protected form = new LifeStylesForm(this.idPrefix);
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