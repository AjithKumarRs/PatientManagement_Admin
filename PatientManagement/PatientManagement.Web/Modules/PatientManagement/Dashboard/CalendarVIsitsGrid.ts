/// <reference path="../Visits/VisitsGrid.ts" />

namespace PatientManagement.PatientManagement {

    @Serenity.Decorators.registerClass()
    export class CalendarVisitsGrid extends VisitsGrid {
        protected getDialogType() { return CalendarVisitsDialog; }
        constructor(container: JQuery) {
            super(container);
        }
        protected getInitialTitle() {
            return null;
        }
    }
}