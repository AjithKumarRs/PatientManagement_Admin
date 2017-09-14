/// <reference types="jqueryui" />
/// <reference types="fullcalendar" />

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CabinetsDialog extends Serenity.EntityDialog<CabinetsRow, any> {
        protected getFormKey() { return CabinetsForm.formKey; }
        protected getIdProperty() { return CabinetsRow.idProperty; }
        protected getLocalTextPrefix() { return CabinetsRow.localTextPrefix; }
        protected getNameProperty() { return CabinetsRow.nameProperty; }
        protected getService() { return CabinetsService.baseUrl; }

        protected form = new CabinetsForm(this.idPrefix);
        constructor() {
            super();

            this.form.WorkHoursEnd.addValidationRule(this.uniqueName, e => {
                if (this.form.WorkHoursEnd != null &&
                    this.form.WorkHoursStart != null &&
                    this.form.WorkHoursStart > this.form.WorkHoursEnd ||
                    this.form.WorkHoursStart == this.form.WorkHoursEnd) {
                    return Q.text("Site.Dashboard.ErrorEndDateBiggerThanStartDate");
                }

                return null;
            });

            this.form.WorkHoursStart.change(function (elem) {
                var dateStart = this.form.WorkHoursStart;
                this.form.WorkHoursEnd = dateStart;
            });
        }

        protected onSaveSuccess(response: Serenity.SaveResponse): void {
            CabinetsService.List({},
                response => {
                    if (response.TotalCount === 1) {
                        $.cookie('CabinetPreference', response.Entities[0].CabinetId, {
                            path: Q.Config.applicationPath,
                            expires: 365
                        });
                    }
                });
            if ($("#calendar").length > 0 {
                $("#calendar").fullCalendar('refetchEvents');

            }
        }
    }
}