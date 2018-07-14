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

            this.form.FreeForReservation.element.bootstrapSwitch('onSwitchChange', e => {
                if (this.form.FreeForReservation.getState()) {
                    Serenity.EditorUtils.setReadOnly(this.form.PatientId, true);
                    Serenity.EditorUtils.setRequired(this.form.PatientId, false);
                    this.form.PatientId.value = null;
                } else {
                    Serenity.EditorUtils.setReadOnly(this.form.PatientId, false);
                    Serenity.EditorUtils.setRequired(this.form.PatientId, true);
                }
            });

            this.form.VisitTypeId.changeSelect2(e => {
                var visitTypeId = Q.toId(this.form.VisitTypeId.value);
                if (visitTypeId != null) {
                    var visitType =
                        PatientManagement.VisitTypesRow.getLookup().itemById[visitTypeId];
                    this.form.VisitTypeCurrencyName.value = visitType.CurrencyName;
                    this.form.Price.value = visitType.Price;
                }
            });

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

                            var text = Q.text("Site.Dashboard.AlertMessagePatientWithNotificationActiveVisitDialog");
                            if ($("#automatic-notification-email").length < 1)
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
            if (!Q.Authorization.hasPermission("AdministrationTenants:VisitPayments:Modify")) {
                Serenity.EditorUtils.setReadOnly(this.form.Price, true);
                this.updateInterface();
            }
            this.form.RepeatPeriod.changeSelect2(e => {
                this.showRepeatUntilBox();
            });
            this.form.RepeatTimes.change(e => {
              this.showRepeatUntilBox();
            });
        }

        afterLoadEntity(): void {

            if (!Q.Authorization.hasPermission("AdministrationTenants:VisitPayments:Modify")) {
                Serenity.EditorUtils.setReadOnly(this.form.Price, true);
                this.updateInterface();
            }

            this.showRepeatUntilBox();
        }

        showRepeatUntilBox(): void {
            var repeatTimes = this.form.RepeatTimes.value;
            var repeatEvery = this.form.RepeatPeriod.value;

            if (repeatTimes > 0 && repeatEvery != null && repeatEvery !== "") {

                var repeatUntilDate = new Date(this.form.EndDate.value);

                if (repeatEvery === "1")
                    repeatUntilDate.setDate(repeatUntilDate.getDate() + repeatTimes);
                else if (repeatEvery === "2") {
                    var days = repeatTimes * 7;
                    repeatUntilDate.setDate(repeatUntilDate.getDate() + days);
                }
                else if (repeatEvery === "3")
                    repeatUntilDate.setMonth(repeatUntilDate.getMonth() + repeatTimes);
                else if (repeatEvery === "4")
                    repeatUntilDate.setFullYear(repeatUntilDate.getFullYear() + repeatTimes);

                this.form.RepeatUntilEndDate.value = Serenity.DateFormatter.format(repeatUntilDate);

                this.form.RepeatUntilEndDate.element.parent(".RepeatUntilEndDate").show(200);
              //  $(".repeat-until-last-date").show(200);

            } else {
                this.form.RepeatUntilEndDate.element.parent(".RepeatUntilEndDate").hide(200);
            }
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