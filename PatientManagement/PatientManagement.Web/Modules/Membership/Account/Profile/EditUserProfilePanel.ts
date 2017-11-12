namespace PatientManagement.Membership {

    @Serenity.Decorators.registerClass()
    export class EditUserProfilePanel extends Serenity.PropertyPanel<EditUserProfileRequest, any> {
        protected getFormKey() { return EditUserProfileForm.formKey; }

        private form: EditUserProfileForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new EditUserProfileForm(this.idPrefix);
            
            var user = <Administration.UserRow>{};
            
            Administration.UserService.Retrieve(<Administration.UserRow>{
                EntityId: Authorization.userDefinition.UserId
            },
                resp => {
                    user = resp.Entity;
                    this.form.DisplayName.value = user.DisplayName;
                    if (user.UserImage != null)
                       //TODO how to add image to ImageUploadEditor

                    this.form.PhoneNumber.value = user.PhoneNumber;
                    this.form.Email.value = user.Email;
                    this.form.WebSite.value = user.WebSite;
                    this.form.EmailSignature.value = user.EmailSignature;

                    this.form.EmailSignature.element.triggerHandler('shown');


                });

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
                            location.reload();
                        });
                    }
                });
            });
        }
        
    }
}