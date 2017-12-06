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
        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            this.cloneButton.toggle(this.isEditMode());
        }

        constructor() {
            super();

            this.form.PatientId.changeSelect2(e => {
                var patientId = this.form.PatientId.value;
                if (!patientId)
                    return;
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

        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            var dateStart = Q.parseDate(clone.StartDate);
            var dateEnd = Q.parseDate(clone.EndDate);

            dateStart.setDate(dateStart.getDate() + parseInt("1"));
            dateEnd.setDate(dateEnd.getDate() + parseInt("1"));

            clone.StartDate = dateStart.toISOString();
            clone.EndDate = dateEnd.toISOString();

            return clone;
        }
    }
}