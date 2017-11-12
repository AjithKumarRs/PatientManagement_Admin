
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MedicalSpecialtyDialog extends Serenity.EntityDialog<MedicalSpecialtyRow, any> {
        protected getFormKey() { return MedicalSpecialtyForm.formKey; }
        protected getIdProperty() { return MedicalSpecialtyRow.idProperty; }
        protected getLocalTextPrefix() { return MedicalSpecialtyRow.localTextPrefix; }
        protected getNameProperty() { return MedicalSpecialtyRow.nameProperty; }
        protected getService() { return MedicalSpecialtyService.baseUrl; }

        protected form = new MedicalSpecialtyForm(this.idPrefix);

    }
}