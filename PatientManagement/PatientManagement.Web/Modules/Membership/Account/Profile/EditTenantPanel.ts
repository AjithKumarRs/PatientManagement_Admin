namespace PatientManagement.Membership {

    @Serenity.Decorators.registerClass()
    export class EditTenantPanel extends Serenity.PropertyPanel<EditTenantRequest, any> {

        protected getFormKey() { return EditTenantForm.formKey; }

        private form: EditTenantForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new EditTenantForm(this.idPrefix);


            var tenant = <Administration.TenantRow>{};

            Administration.TenantService.Retrieve({
                    EntityId: Authorization.userDefinition.TenantId
                },
                resp => {
                    tenant = resp.Entity;
                    this.form.TenantName.value = tenant.TenantName;
                    this.form.TenantWebSite.value = tenant.TenantWebSite;

                    if (this.form.TenantImage.value != null)
                        this.form.TenantImage.value.Filename = tenant.TenantImage;
                    this.form.TenantEmailSignature.value = tenant.TenantEmailSignature;
                    this.form.OverrideUsersEmailSignature.element.bootstrapSwitch('state', tenant.OverrideUsersEmailSignature);
                });



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
                        Q.information(Q.text('Forms.Membership.Profile.SuccessTenant'), () => {
                            //window.location.href = Q.resolveUrl('~/');

                            location.reload();
                        });
                    }
                });
            });
        }
    }
}