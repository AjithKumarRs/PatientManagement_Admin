
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
        private visitsGrid: PatientVisitsGrid;
        private loadedState: string;

        private patientHealthForm: PatientHealthForm;
        private patientHealthGrid: Serenity.PropertyGrid;
        private patientValidator: JQueryValidation.Validator;
        private selfChange = 0;


        constructor() {
            super();

            this.visitsGrid = new PatientVisitsGrid(this.byId("VisitsGrid"));
            this.visitsGrid.element.flexHeightOnly(1);

            this.patientHealthGrid = new Serenity.PropertyGrid(this.byId("PatientHealthPropertyGrid"),
                {
                    items: Q.getForm(PatientHealthForm.formKey).filter(x => x.name != "PatientId"),
                    useCategories: true
                });

            this.patientHealthForm = new PatientHealthForm((this.patientHealthGrid as any).idPrefix);

            this.patientValidator = this.byId("PatientHealthForm").validate(Q.validateOptions({}));

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
        protected savePatientHealth(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean {
            var id = this.patientHealthForm.PatientId;
            if (!id) {
                onSuccess(null);
            }
            else {
                // Get current tab
                var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);

                // Select the correct tab and validate to see the error message in tab
                Serenity.TabsExtensions.selectTab(this.tabs, "PatientHealth");
                if (!this.patientValidator.form()) {
                    return false;
                }

                // Re-select initial tab
                Serenity.TabsExtensions.selectTab(this.tabs, currTab);

                // prepare an empty entity to serialize customer details into
                var c = <PatientHealthRow>{};
                this.patientHealthGrid.save(c);

                PatientHealthService.Update({
                    EntityId: id,
                    Entity: c
                }, response => {
                    // reload customer list just in case
                    Q.reloadLookup(PatientHealthRow.lookupKey);

                    // set flag that we are triggering customer select change event
                    // otherwise active tab will change to first one
                    this.selfChange++;
                    try {
                    }
                    finally {
                        this.selfChange--;
                    }

                    onSuccess(response);
                });
            }

            return true;
        }
        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: PatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Visits', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'PatientHealth', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'LifeStyle', this.isNewOrDeleted());

            if (this.isNewOrDeleted()) {
                // no customer is selected, just load an empty entity
                this.patientHealthGrid.load({});
                return;
            }
            console.log(entity.PatientId);

            // load selected customer into customer form by calling CustomerService
            PatientHealthService.Retrieve({
                EntityId: entity.PatientId
            }, response => {
                this.patientHealthGrid.load(response.Entity);
            });

            this.visitsGrid.patientId = entity.PatientId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('PatientManagement.Patients');
        }
    }
}