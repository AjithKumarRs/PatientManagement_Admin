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
        public newPredifinedVisit = (start, end): void => {

            var p = <PatientManagement.VisitsRow>{};
            var dlg = new PatientManagement.CalendarVisitsDialog();

            p.StartDate = start;
            p.EndDate = end;
            dlg.loadEntityAndOpenDialog(<PatientManagement.VisitsRow>{
                StartDate: start,
              EndDate: end
            });
        }
        public updateVisit = (visitId, start, end): void => {

            var p = <PatientManagement.VisitsRow>{};

            VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {

                p = resp.Entity;
                Q.notifyInfo(Q.text("Site.Dashboard.SuccessChangedVisitDates") + p.PatientName);

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

        public deleteVisit = (visitId): void => {
            var p = <PatientManagement.VisitsRow>{};

            VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {
              
                p = resp.Entity;

                Q.confirm(this.formatAlertMessage(Q.text("Site.Dashboard.AlertOnCalendarRemove"), p.PatientName, (p.StartDate) as any, (p.EndDate) as any), () => {
                    VisitsService.Delete({
                            EntityId: visitId
                        },
                        resp => {
                            Q.notifyInfo(Q.text("Site.Dashboard.SuccessDeletingVisitDates") + p.PatientName);

                            $("#calendar").fullCalendar('refetchEvents');
                        });
                },{});


     
                
            });

        }
        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            $("#calendar").fullCalendar('refetchEvents');
        }

        protected onDeleteSuccess(response: Serenity.DeleteResponse): void {

            $("#calendar").fullCalendar('refetchEvents');
        }

        protected formatAlertMessage(firstLine, title, startDate: Date, endDate: Date): string {

            var str = firstLine +
                "\n" +
                Q.text("Site.Dashboard.CalendarPatient") +
                " " +
                title +
                "\n\n" +
                Q.text("Site.Dashboard.CalendarStartDate") +
                " " +
                startDate.toLocaleString() +
                "\n" +
                Q.text("Site.Dashboard.CalendarEndDate") +
                " " +
                endDate.toLocaleString();

            return str;
        }
    }
}