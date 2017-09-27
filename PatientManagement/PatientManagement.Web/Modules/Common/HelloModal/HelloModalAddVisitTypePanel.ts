namespace PatientManagement.Common {
    export class HelloModalAddVisitTypePanel extends Serenity.PropertyPanel<HelloModalAddVisitTypeRequest, any> {
        protected getFormKey() { return HelloModalAddVisitTypeForm.formKey; }
        private form: HelloModalAddVisitTypeForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new HelloModalAddVisitTypeForm(this.idPrefix);

            $(".BorderColor input").colorpicker();
            $(".BackgroundColor input").colorpicker();

            Serenity.EditorUtils.setReadOnly(this.form.BorderColor, true);
            Serenity.EditorUtils.setReadOnly(this.form.BackgroundColor, true);
            this.toolbar.element.text(Q.text("Site.HelloModal.StepVisitTypeTitle"));

        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
            return Q.getTemplate("EntityDialogBoxSolid");
        }

        public ValidateForm() {
            return this.validateForm();
        }

        public SaveEntity() {
            var entity = <PatientManagement.VisitTypesRow>{};

            var formEntity = this.getSaveEntity();
            entity.Name = formEntity.Name;
            entity.BackgroundColor = formEntity.BackgroundColor;
            entity.BorderColor = formEntity.BorderColor;

            PatientManagement.VisitTypesService.Create({
                    Entity: entity
                },
                response => {
                    Q.notifySuccess(Q.text("Controls.EntityDialog.SaveSuccessMessage"));
                    Q.reloadLookup(PatientManagement.VisitTypesRow.lookupKey);
                });

            return true;
        }
    }
}