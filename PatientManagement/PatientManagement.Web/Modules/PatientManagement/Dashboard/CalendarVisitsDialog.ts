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
        
        public updateVisit = (visitId, start, end): string => {
            console.log(visitId);
            var p = <PatientManagement.VisitsRow>{};

            VisitsService.Retrieve(<any>{
                EntityId: visitId
            }, resp => {
                var text = Q.format(Q.text("Site.Dashboard.SuccessChangedVisitDates"), resp.Entity.PatientName, resp.Entity.StartDate, resp.Entity.EndDate);
                Q.notifyInfo(text + resp.Entity.PatientName + " Моля натиснете бутона <span class='fa fa-refresh'></span> за да видите промените в таблицата.");

                p = resp.Entity;
            });

            p.StartDate = start;
            p.EndDate = end;

            VisitsService.Update({
                Entity: p,
                EntityId: visitId
            }, response => {
                Q.reloadLookup(PatientManagement.VisitsRow.lookupKey);
            })
            return "yppppye";
        }
        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            // check that this is an insert
            if (this.isNew) {

                // you could also open a new dialog
                // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);

                // but let's better load inserted record using Retrieve service
                VisitsService.Retrieve(<any>{
                    EntityId: response.EntityId
                }, resp => {
                  //  Q.notifySuccess("Looks like the category you added has name: " + resp.Entity.PatientName);
             
                    var event = { id: resp.Entity.PatientId, title: resp.Entity.PatientName, start: resp.Entity.StartDate, end: resp.Entity.EndDate };
                 
                    $("#calendar").fullCalendar('renderEvent', event, true);
                });
            }
        }

    }
}