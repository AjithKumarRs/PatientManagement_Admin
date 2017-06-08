
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CurrenciesDialog extends Serenity.EntityDialog<CurrenciesRow, any> {

        protected getFormKey() { return CurrenciesForm.formKey; }
        protected getIdProperty() { return CurrenciesRow.idProperty; }
        protected getLocalTextPrefix() { return CurrenciesRow.localTextPrefix; }
        protected getNameProperty() { return CurrenciesRow.nameProperty; }
        protected getService() { return CurrenciesService.baseUrl; }

        protected form = new CurrenciesForm(this.idPrefix);

  
    }
}