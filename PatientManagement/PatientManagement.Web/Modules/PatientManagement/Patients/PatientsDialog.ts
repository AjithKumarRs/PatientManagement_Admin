
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

        private patientHealthForm: PatientHealthForm;
        private patientHealthGrid: Serenity.PropertyGrid;
        private patientValidator: JQueryValidation.Validator;
        private selfChange = 0;

        private lifeStyleForm: LifeStylesForm;
        private lifeStyleGrid: Serenity.PropertyGrid;

        private patientsFileUploadsGrid: FIleUploadsForPatientGrid;

        private checkEgn = (egn) => {
            if (egn.length != 10)
                return false;
            if (/[^0-9]/.test(egn))
                return false;
            var year = Number(egn.slice(0, 2));
            var month = Number(egn.slice(2, 4));
            var day = Number(egn.slice(4, 6));

            if (month >= 40) {
                year += 2000;
                month -= 40;
            } else if (month >= 20) {
                year += 1800;
                month -= 20;
            } else {
                year += 1900;
            }

            if (!this.isValidDate(year, month, day))
                return false;

            var checkSum = 0;
            var weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

            for (var ii = 0; ii < weights.length; ++ii) {
                checkSum += weights[ii] * Number(egn.charAt(ii));
            }

            checkSum %= 11;
            checkSum %= 10;

            if (checkSum !== Number(egn.charAt(9)))
                return false;

            return true;

        }
        protected isValidDate = (y, m, d):boolean => {
            var date = new Date(y, m - 1, d);
            return date && (date.getMonth() + 1) == m && date.getDate() == Number(d);
        } 

        constructor() {
            super();

            this.form.PersonalNumber.addValidationRule(this.uniqueName, e => {
                if (!this.checkEgn(this.form.PersonalNumber.value)) {
                    return Q.text("Site.ValidationError.ValidateEgnNotCorrect");
                }

                return null;
            });


            //Initialize new instance of visits grid
            this.visitsGrid = new PatientVisitsGrid(this.byId("VisitsGrid"));
            this.visitsGrid.element.flexHeightOnly(1);

            //Initialize new instance of patient health grid and form
            this.patientHealthGrid = new Serenity.PropertyGrid(this.byId("PatientHealthPropertyGrid"),
                {
                    items: Q.getForm(PatientHealthForm.formKey).filter(x => x.name != "PatientId"),
                    useCategories: true
                });

            this.patientHealthForm = new PatientHealthForm((this.patientHealthGrid as any).idPrefix);

            //Initialize new instance of LifeStyle grid and form
            this.lifeStyleGrid = new Serenity.PropertyGrid(this.byId("LifeStylePropertyGrid"),
                {
                    items: Q.getForm(LifeStylesForm.formKey).filter(x => x.name != "PatientId"),
                    useCategories: true
                });

            this.lifeStyleForm = new LifeStylesForm((this.lifeStyleGrid as any).idPrefix);

            //Initialize new instance of LifeStyle grid and form
            this.patientsFileUploadsGrid = new FIleUploadsForPatientGrid(this.byId("FileUploadsPropertyGrid"));
            this.patientsFileUploadsGrid.element.flexHeightOnly(1);

            this.patientValidator = this.byId("PatientHealthForm").validate(Q.validateOptions({}));

            this.patientValidator = this.byId("LifeStyleForm").validate(Q.validateOptions({}));
            
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            //Add button for saving patient health form
            // ReSharper disable once WrongExpressionStatement
            new Serenity.Toolbar(this.byId("PatientHealthToolbar"),
                {
                    buttons: [
                        {
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.UpdateButton"),
                            onClick: () => {
                                var id = this.form.PatientId.value;

                                if (!id)
                                    return;

                                if (!this.patientValidator.form())
                                    return;

                                var p = <PatientManagement.PatientHealthRow>{};
                                this.patientHealthGrid.save(p);

                                PatientManagement.PatientHealthService.Update({
                                    EntityId: id,
                                    Entity: p
                                }, response => {
                                    // reload customer list just in case
                                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);

                                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));

                                });
                            }
                        }]
                });

            //Add button for saving patient life style form
            // ReSharper disable once WrongExpressionStatement
            new Serenity.Toolbar(this.byId("LifeStyleToolbar"),
                {
                    buttons: [
                        {
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.UpdateButton"),
                            onClick: () => {
                                var id = this.form.PatientId.value;

                                if (!id)
                                    return;

                                if (!this.patientValidator.form())
                                    return;

                                var p = <PatientManagement.LifeStylesRow>{};
                                this.lifeStyleGrid.save(p);

                                PatientManagement.LifeStylesService.Update({
                                    EntityId: id,
                                    Entity: p
                                }, response => {
                                    // reload customer list just in case
                                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);

                                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                                });
                            }
                        }]
                });
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
            Serenity.TabsExtensions.setDisabled(this.tabs, 'PatientHealth', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'LifeStyle', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'FileUploads', this.isNewOrDeleted());

            if (this.isNewOrDeleted()) {
                // no patient is selected, just load an empty entity
                this.patientHealthGrid.load({});
                return;
            }

            PatientHealthService.Retrieve({
                EntityId: entity.PatientId
            }, response => {
                this.patientHealthGrid.load(response.Entity);
            });

            LifeStylesService.Retrieve({
                EntityId: entity.PatientId
            },
            response => {
                this.lifeStyleGrid.load(response.Entity);
            });

            this.visitsGrid.patientId = entity.PatientId;

            this.patientsFileUploadsGrid.patientId = entity.PatientId;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('PatientManagement.Patients');
        }


    }
}