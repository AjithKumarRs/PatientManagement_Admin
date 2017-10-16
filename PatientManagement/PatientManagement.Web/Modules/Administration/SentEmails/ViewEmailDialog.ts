
namespace PatientManagement.Administration {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class ViewEmailDialog extends Serenity.TemplatedDialog<any> {

        private email: SentEmailsRow;
        private emailId: number;
        private toEmail: string;
        private insertedDate: string;

        constructor(entityId: number, toEmail: string, insertedDate: string) {
            super();

            this.toEmail = toEmail;
            this.emailId = entityId;
            this.insertedDate = insertedDate;
        }

        protected onDialogOpen() {
            super.onDialogOpen();

            SentEmailsService.Retrieve({
                EntityId: this.emailId
                },
                response => {
                    this.email = response.Entity;
                    console.log(this.email);

                    $('#email-body').contents().find('html').html(this.email.Body);
                });


            //TODO get emaiil body here 
        }
        protected getTemplate() {
            // you could also put this in a Email.Template.html file. it's here for simplicity.
            return "<div id='~_Email'><iframe style='width: 100%; min-height: 620px; height: 100%' id='email-body'> </iframe></div>";
        }

        //protected getDialogOptions() {
        //    var opt = super.getDialogOptions();
        //    console.log(this.email);

        //    opt.title = 'Email to ' + this.toEmail + 'Sent on ' + this.insertedDate;
        //    return opt;
        //}
    }

}