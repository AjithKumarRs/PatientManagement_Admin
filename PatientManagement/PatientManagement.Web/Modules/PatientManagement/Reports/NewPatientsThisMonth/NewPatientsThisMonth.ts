namespace PatientManagement.PatientManagement {

    export class NewPatientsThisMonth extends Serenity.TemplatedWidget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            $(this.byId("NewPatientsThisMonthBoxLeft")).addClass("bg-" + ThemeHelper.getCurrentTheme() + "-gradient");

            ReportsEndpointService.NewPatientsThisMonth({},
                response => {
                    ReportsCommon.animateAndFillNumbers(this.byId("NewPatientsThisMonthCounter"), response.Entity.Counter, 4000);
                    ReportsCommon.animateAndFillNumbers(this.byId("NewPatientsMonthBeforeCounter"), response.Entity.CounterMonthBefore, 4000);
                    ReportsCommon.animateAndFillDecimals(this.byId("NewPatientsThisMonthPercent"), response.Entity.PercentMonthBefore, 4000);
                    
                    if (response.Entity.PercentMonthBefore >= 0) {
                        $(this.byId("NewPatientsThisMonthBox")).addClass("bg-green-gradient");
                        $(this.byId("NewPatientsThisMonthIcon")).addClass("fa-arrow-circle-o-up");
                    } else {
                        $(this.byId("NewPatientsThisMonthBox")).addClass("bg-red-gradient");
                        $(this.byId("NewPatientsThisMonthIcon")).addClass("fa-arrow-circle-o-down");
                    }
                });
        }
    }
} 