
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SentEmailsDialog extends Serenity.EntityDialog<SentEmailsRow, any> {
        protected getFormKey() { return SentEmailsForm.formKey; }
        protected getIdProperty() { return SentEmailsRow.idProperty; }
        protected getLocalTextPrefix() { return SentEmailsRow.localTextPrefix; }
        protected getNameProperty() { return SentEmailsRow.nameProperty; }
        protected getService() { return SentEmailsService.baseUrl; }

        protected form = new SentEmailsForm(this.idPrefix);


        loadEntity(entity: SentEmailsRow) {
            super.loadEntity(entity);
            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadOnly(this.form.Subject, true);
            }
        }
        public sendPredefinedEmail = (visitId): void => {

            PatientManagement.VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {
                var visit = <PatientManagement.VisitsRow>{};
                visit = resp.Entity;

                //TODO: Remove this service call! 
                PatientManagement.PatientsService.Retrieve(<any>{
                        EntityId: visit.PatientId
                    },
                    resp => {
                        var patient = <PatientManagement.PatientsRow>{};
                        patient = resp.Entity;
                        if (!patient.Email) {

                            Q.confirm(Q.text("Site.Dashboard.AlertOnPatientNoEmail"),
                                () => {
                                    new PatientManagement.PatientsDialog().loadByIdAndOpenDialog(patient.PatientId);
                                });
                        } else {
                            var sentEmail = <SentEmailsRow>{};
                            var sentEmailDialog = new SentEmailsDialog();
                            
                            sentEmail.ToEmail = patient.Email;
                            sentEmail.ToName = patient.Name;

                            // TODO: Default value for email lookup
                            sentEmailDialog.loadNewAndOpenDialog();
                        }
                    });

            });

        }
    }
}