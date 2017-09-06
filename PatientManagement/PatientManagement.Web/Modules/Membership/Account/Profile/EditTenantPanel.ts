namespace PatientManagement.Membership {

    @Serenity.Decorators.registerClass()
    export class EditTenantPanel extends Serenity.PropertyPanel<EditTenantRequest, any> {

        protected getFormKey() { return EditTenantForm.formKey; }

        private form: EditTenantForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new EditTenantForm(this.idPrefix);
            this.byId('EditTenantSubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/EditTenant'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
                            window.location.href = Q.resolveUrl('~/');
                        });
                    }
                });
            });
        }
    }
}