
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

            if (this.isNewOrDeleted) {
                console.log("sa"); 
            }
        }
    }
}