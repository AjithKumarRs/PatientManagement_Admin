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