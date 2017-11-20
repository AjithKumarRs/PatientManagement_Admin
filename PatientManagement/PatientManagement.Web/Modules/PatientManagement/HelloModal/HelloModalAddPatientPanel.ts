namespace PatientManagement.Common {
    export class HelloModalAddPatientPanel extends Serenity.PropertyPanel<HelloModalAddPatientRequest, any> {
        protected getFormKey() { return HelloModalAddPatientForm.formKey; }
        private form: HelloModalAddPatientForm;

        constructor(container: JQuery) {
            super(container);
            
            this.form = new HelloModalAddPatientForm(this.idPrefix);
            this.toolbar.element.text(Q.text("Site.HelloModal.StepPatientTitle"));

        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return Q.getTemplate("EntityDialogBoxSolid");
        }


        public ValidateForm() {
            return this.validateForm();
        }

        public SaveEntity() {

            var entity = <PatientManagement.PatientsRow>{};

            var formEntity = this.getSaveEntity();
            entity.Name = formEntity.Name;
            entity.PhoneNumber = formEntity.PhoneNumber;
            entity.Gender = formEntity.Gender;
            entity.Email = formEntity.Email;
            entity.NotifyOnChange = formEntity.NotifyOnChange;

            PatientManagement.PatientsService.Create({
                Entity: entity
                },
                response => {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.PatientsRow.lookupKey);

                });

            return true;
        }
    }
}