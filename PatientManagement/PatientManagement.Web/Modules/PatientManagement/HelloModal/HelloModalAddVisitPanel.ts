namespace PatientManagement.Common {
    export class HelloModalAddVisitPanel extends Serenity.PropertyPanel<HelloModalAddVisitRequest, any> {
        protected getFormKey() { return HelloModalAddVisitForm.formKey; }
        private form: HelloModalAddVisitForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new HelloModalAddVisitForm(this.idPrefix);
            this.toolbar.element.text(Q.text("Site.HelloModal.StepVisitTitle"));
          
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return Q.getTemplate("EntityDialogBoxSolid");
        }

        public ValidateForm() {
            return this.validateForm();
        }

        public SaveEntity() {
            var entity = <PatientManagement.VisitsRow>{};

            var formEntity = this.getSaveEntity();
            entity.PatientId = formEntity.PatientId;
            entity.VisitTypeId = formEntity.VisitTypeId;
            entity.CabinetId = formEntity.CabinetId;
            entity.StartDate = formEntity.StartDate;
            entity.EndDate = formEntity.EndDate;
            entity.Description = formEntity.Description;

            PatientManagement.VisitsService.Create({
                    Entity: entity
                },
                response => {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));

                });

            return true;
        }
    }
}