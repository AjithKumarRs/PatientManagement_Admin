/// <reference types="jqueryui" />
/// <returns type="jquery.colorpicker"></returns>

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class VisitTypesDialog extends Serenity.EntityDialog<VisitTypesRow, any> {
        protected getFormKey() { return VisitTypesForm.formKey; }
        protected getIdProperty() { return VisitTypesRow.idProperty; }
        protected getLocalTextPrefix() { return VisitTypesRow.localTextPrefix; }
        protected getNameProperty() { return VisitTypesRow.nameProperty; }
        protected getService() { return VisitTypesService.baseUrl; }

        protected form = new VisitTypesForm(this.idPrefix);

        loadEntity(entity: VisitTypesRow) {
            super.loadEntity(entity);

            $(".BorderColor input").colorpicker();
            $(".BackgroundColor input").colorpicker();

            Serenity.EditorUtils.setReadOnly(this.form.BorderColor, true);
            Serenity.EditorUtils.setReadOnly(this.form.BackgroundColor, true);

        }
    }
}