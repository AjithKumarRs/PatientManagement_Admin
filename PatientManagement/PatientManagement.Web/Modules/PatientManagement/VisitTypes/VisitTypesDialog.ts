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
            if (this.isNew()) {
                this.form.CurrencyId.value = Q.getRemoteData("UserData").TenantCurrencyId;
            }
            if (Q.Authorization.hasPermission("AdministrationTenants:VisitPayments")) {
                if (!Q.Authorization.hasPermission("Administration:Tenants"))
                    Serenity.EditorUtils.setReadOnly(this.form.CurrencyId, true);

            }
            Serenity.EditorUtils.setReadOnly(this.form.BorderColor, true);
            Serenity.EditorUtils.setReadOnly(this.form.BackgroundColor, true);

        }


        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            console.log(this.form.ShowInMenu.getState());
            if (this.isNew() && this.form.ShowInMenu.getState()) {
                location.reload();
            }
        }
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void {
            if (this.form.ShowInMenu.getState()) {
                location.reload();
            }
        }
    }
}