
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LifeStylesDialog extends Serenity.EntityDialog<LifeStylesRow, any> {
        protected getFormKey() { return LifeStylesForm.formKey; }
        protected getIdProperty() { return LifeStylesRow.idProperty; }
        protected getLocalTextPrefix() { return LifeStylesRow.localTextPrefix; }
        protected getNameProperty() { return LifeStylesRow.nameProperty; }
        protected getService() { return LifeStylesService.baseUrl; }

        protected form = new LifeStylesForm(this.idPrefix);

    }
}