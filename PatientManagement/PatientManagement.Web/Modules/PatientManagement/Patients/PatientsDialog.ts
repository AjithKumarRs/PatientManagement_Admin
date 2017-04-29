
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PatientsDialog extends Serenity.EntityDialog<PatientsRow, any> {
        protected getFormKey() { return PatientsForm.formKey; }
        protected getIdProperty() { return PatientsRow.idProperty; }
        protected getLocalTextPrefix() { return PatientsRow.localTextPrefix; }
        protected getNameProperty() { return PatientsRow.nameProperty; }
        protected getService() { return PatientsService.baseUrl; }

        protected form = new PatientsForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
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