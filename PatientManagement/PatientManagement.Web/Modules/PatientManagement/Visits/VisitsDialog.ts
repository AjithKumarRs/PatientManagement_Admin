/// <reference types="jquery" />

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class VisitsDialog extends Serenity.EntityDialog<VisitsRow, any> {
        protected getFormKey() { return VisitsForm.formKey; }
        protected getIdProperty() { return VisitsRow.idProperty; }
        protected getLocalTextPrefix() { return VisitsRow.localTextPrefix; }
        protected getService() { return VisitsService.baseUrl; }

        protected form = new VisitsForm(this.idPrefix);

        constructor() {
            super();

            this.form.PatientId.changeSelect2(e => {
                var patientId = this.form.PatientId.value;
                
                PatientsService.Retrieve({
                        EntityId: patientId
                    },
                    response => {
                        if (response.Entity.NotifyOnChange) {
                            var parentCat = this.form.PatientId.element.parents(".categories ");
                            console.log(parentCat);
                            var text = Q.text("Site.Dashboard.AlertMessagePatientWithNotificationActiveVisitDialog");
                            parentCat.append(
                                "<div class='alert alert-info' style='display: none' id='automatic-notification-email'>" + text + "</div>");
                                $("#automatic-notification-email").show(200);

                        } else {
                            $("#automatic-notification-email").hide(200);
                        }
                    });
            });

            this.form.EndDate.addValidationRule(this.uniqueName, e => {
                if (this.form.EndDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate > this.form.EndDate.valueAsDate ||
                    this.form.StartDate == this.form.EndDate) {
                    return Q.text("Site.Dashboard.ErrorEndDateBiggerThanStartDate");
                }
                
                return null;
            });

            this.form.StartDate.change(function (elem) {
                var dateStart = this.form.StartDate.value;
                this.form.EndDate.value = dateStart;
            });
        }
    }
}