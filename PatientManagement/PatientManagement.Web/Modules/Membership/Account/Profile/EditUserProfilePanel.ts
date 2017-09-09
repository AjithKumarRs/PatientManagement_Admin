namespace PatientManagement.Membership {

    @Serenity.Decorators.registerClass()
    export class EditUserProfilePanel extends Serenity.PropertyPanel<EditUserProfileRequest, any> {

        protected getFormKey() { return EditUserProfileForm.formKey; }

        private form: EditUserProfileForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new EditUserProfileForm(this.idPrefix);
            this.byId('EditUserProfileSubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/EditUserProfile'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.Profile.Success'), () => {
                            //window.location.href = Q.resolveUrl('~/');

                            location.reload();
                        });
                    }
                });
            });
        }
    }
}