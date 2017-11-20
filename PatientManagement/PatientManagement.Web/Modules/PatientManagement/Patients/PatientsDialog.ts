
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.maximizable()
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


        private patientActivityGrid: PatientActivityGrid;
        private patientsFileUploadsGrid: FIleUploadsForPatientGrid;
        private patientHealthGrid: PatientHealthCheckGrid;
        private patientlifeStyleGrid: PatientLifeStylesGrid;

        private patientValidator: JQueryValidation.Validator;
        private selfChange = 0;

        private checkEgn = (egn) => {
            if (egn.length != 10)
                return false;
            if (/[^0-9]/.test(egn))
                return false;

            return true;

        }
        private checkPhone = (phone) => {
            if (phone.length > 30)
                return false;
            if (/[^0-9]/.test(phone))
                return false;

            return true;

        }
        protected isValidDate = (y, m, d): boolean => {
            var date = new Date(y, m - 1, d);
            return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
        }

        constructor() {
            super();

            this.form.PersonalNumber.addValidationRule(this.uniqueName, e => {
                if (!this.checkEgn(this.form.PersonalNumber.value)) {
                    return Q.text("Controls.EntityDialog.SaveSuccessMessage");
                }

                return null;
            });
            this.form.PhoneNumber.addValidationRule(this.uniqueName, s => {
                if (!this.checkPhone(this.form.PhoneNumber.value)) {
                    return Q.text("Controls.EntityDialog.SaveSuccessMessage");

                }

                return null;
            });
            
            this.visitsGrid = new PatientVisitsGrid(this.byId("VisitsGrid"));
            this.visitsGrid.element.flexHeightOnly(1);
            
            this.patientHealthGrid = new PatientHealthCheckGrid(this.byId("HealthChecksGrid"));
            this.patientHealthGrid.element.flexHeightOnly(1);

            this.patientlifeStyleGrid = new PatientLifeStylesGrid(this.byId("LifeStyleGrid"));
            this.patientlifeStyleGrid.element.flexHeightOnly(1);

            this.patientActivityGrid = new PatientActivityGrid(this.byId("ActivityGrid"));
            this.patientActivityGrid.element.flexHeightOnly(1);
            
            this.patientsFileUploadsGrid = new FIleUploadsForPatientGrid(this.byId("FileUploadsPropertyGrid"));
            this.patientsFileUploadsGrid.element.flexHeightOnly(1);


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

        loadEntity(entity: PatientsRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Visits', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'HealthChecks', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'LifeStyle', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Activity', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'FileUploads', this.isNewOrDeleted());


            this.visitsGrid.patientId = entity.PatientId;
            this.patientHealthGrid.patientId = entity.PatientId;
            this.patientsFileUploadsGrid.patientId = entity.PatientId;
            this.patientActivityGrid.patientId = entity.PatientId;
            this.patientlifeStyleGrid.patientId = entity.PatientId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('PatientManagement.Patients');
        }


    }
}