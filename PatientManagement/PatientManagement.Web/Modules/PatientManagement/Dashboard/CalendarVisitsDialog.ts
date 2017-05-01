/// <reference path="../Visits/VisitsDialog.ts" />


namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class CalendarVisitsDialog extends VisitsDialog {


        protected getEntityTitle(): string {

            if (!this.isEditMode()) {
                // we shouldn't hit here, but anyway for demo...
                return "How did you manage to open this dialog in new record mode?";
            }
            else {

                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
            }
        }

        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            // check that this is an insert
            if (this.isNew) {
                Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);

                // you could also open a new dialog
                // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);

                // but let's better load inserted record using Retrieve service
                VisitsService.Retrieve(<any>{
                    EntityId: response.EntityId
                }, resp => {
                    Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.PatientName);
                });
            }
        }
    }
}