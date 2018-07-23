/// <reference path="../Visits/VisitsDialog.ts" />
/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />

declare var FullCalendar: any;

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class CalendarVisitsDialog extends VisitsDialog {

        public newPredifinedVisit = (start, end): void => {

            var p = <PatientManagement.VisitsRow>{};
            p.StartDate = start;
            p.EndDate = end;

            this.loadEntityAndOpenDialog(<PatientManagement.VisitsRow>{
                StartDate: start,
                EndDate: end,
                CabinetId: $.cookie("CabinetPreference")
            });
            

        }
        public updateVisit = (visitId, start, end, isRepeated, repeatCounter): void => {
        
            VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {

                p = resp.Entity;
                
                if (p.PatientName) {
                    Q.notifyInfo(Q.text("Site.Dashboard.SuccessChangedVisitDates") + p.PatientName);

                } else {
                    Q.notifyInfo(Q.text("Site.Dashboard.SuccessChangedVisitDatesFreeForReservation"));
                }

                var beforeDateStart = resp.Entity.StartDate;
                var beforeDateEnd = resp.Entity.EndDate;

                var p = <PatientManagement.VisitsRow>{};

                if (isRepeated) {
                    p.IsRepeated = isRepeated;
                    p.RepeatCounter = repeatCounter;
                }

                p.StartDate = start;
                p.EndDate = end;
                VisitsService.Update({
                        Entity: p,
                        EntityId: visitId
                    }, 
                    response => {
                        Q.reloadLookup(PatientManagement.VisitsRow.lookupKey);

                        $('#VisitsGridDiv .refresh-button').click();
                        if (p.IsRepeated ||
                            new Date(start).getDay() === new Date().getDay() ||
                            new Date(end).getDay() === new Date().getDay() ||
                            new Date(beforeDateStart).getDay() === new Date().getDay() ||
                            new Date(beforeDateEnd).getDay() === new Date().getDay()) {

                            CalendarVisitsDialog.refreshVisitForTodayBox();
                        }
                    });


            });

        }

        public deleteVisit = (visitId): void => {
            var p = <PatientManagement.VisitsRow>{};

            VisitsService.Retrieve({
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
            CalendarVisitsDialog.refreshVisitForTodayBox();

            $("#calendar").fullCalendar('refetchEvents');
        }

        public static refreshVisitForTodayBox() {
            $.get('/Dashboard/GetTodayVisits/', data => {
                $('#today-visit-counter').text(data.countVisitsForToday);
                var width = (data.alreadyExpired / data.countVisitsForToday) * 100;
                $('#today-visits-progress').attr('aria-valuemax', data.countVisitsForToday);
                $('#today-visits-progress').attr('aria-valuenow', data.alreadyExpired).css('width', width + '%');

            });
        }
         
        protected onDeleteSuccess(response: Serenity.DeleteResponse): void {
            CalendarVisitsDialog.refreshVisitForTodayBox();
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