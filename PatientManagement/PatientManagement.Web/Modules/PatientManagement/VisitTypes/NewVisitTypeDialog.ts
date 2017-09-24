/// <reference path="../VisitTypes/VisitTypesDialog.ts" />
namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class NewVisitTypeDialog extends PatientManagement.VisitTypesDialog {

        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            location.reload();
        }
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void {
            location.reload();
        }
    }
}