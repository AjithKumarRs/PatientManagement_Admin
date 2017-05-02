/// <reference path="../Visits/VisitsDialog.ts" />
/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />

declare var FullCalendar: any;

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class CalendarVisitsDialog extends VisitsDialog {
        protected updateTitle(): void {
            super.updateTitle();
            if (this.isEditMode()) {


                Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);

            }
        }

        public updateVisit = (visitId, start, end): void => {

            var p = <PatientManagement.VisitsRow>{};

            VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {
                var text = Q.format(Q.text("Site.Dashboard.SuccessChangedVisitDates"), resp.Entity.PatientName, resp.Entity.StartDate, resp.Entity.EndDate);
                Q.notifyInfo(text + resp.Entity.PatientName);

                p = resp.Entity;
            });

            p.StartDate = start;
            p.EndDate = end;

            VisitsService.Update({
                    Entity: p,
                    EntityId: visitId
                },
                response => {
                    Q.reloadLookup(PatientManagement.VisitsRow.lookupKey);

                    $('#VisitsGridDiv .refresh-button').click();
                });
        }
        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            VisitsService.Retrieve(<any>{
                EntityId: response.EntityId
            }, resp => {
                $("#calendar").fullCalendar('refetchEvents');
            });

        }

        protected onDeleteSuccess(response: Serenity.DeleteResponse): void {
            console.log(response);

            $("#calendar").fullCalendar('refetchEvents');
        }
    }
}