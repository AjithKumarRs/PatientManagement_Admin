namespace PatientManagement.Common {
    export class HelloModalAddCabinetPanel extends Serenity.PropertyPanel<HelloModalAddCabinetRequest, any> {
        protected getFormKey() { return HelloModalAddCabinetForm.formKey; }
        private form: HelloModalAddCabinetForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new HelloModalAddCabinetForm(this.idPrefix);
            this.toolbar.element.text(Q.text("Site.HelloModal.StepCabinetTitle"));
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return Q.getTemplate("EntityDialogBoxSolid");
        }

        public ValidateForm() {
            return this.validateForm();
        }

        public SaveEntity() {

            var cabinet = <PatientManagement.CabinetsRow>{};

            var entity = this.getSaveEntity();
            cabinet.Name = entity.Name;
            cabinet.WorkHoursEnd = entity.WorkHoursEnd;
            cabinet.WorkHoursStart = entity.WorkHoursStart;

            PatientManagement.CabinetsService.Create({
                    Entity: cabinet
                },
                response => {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.CabinetsRow.lookupKey);
                    $('#btn-close-hellomodal').attr("data-reaload-page", 1);

                });

            return true;
        }
    }
}