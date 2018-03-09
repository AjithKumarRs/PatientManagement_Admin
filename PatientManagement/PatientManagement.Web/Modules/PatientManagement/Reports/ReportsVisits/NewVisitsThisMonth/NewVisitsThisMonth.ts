namespace PatientManagement.PatientManagement {

    export class NewVisitsThisMonth extends Serenity.TemplatedWidget<any> {
       constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            $(this.byId("NewVisitsThisMonthBoxLeft")).addClass("bg-" + ThemeHelper.getCurrentTheme() + "-gradient");
            
            ReportsVisitsEndpointService.NewVisitsThisMonth({},
                response => {
                    if (response.Entity.PercentMonthBefore >= 0) {
                        $(this.byId("NewVisitsThisMonthBox")).addClass("bg-green-gradient");
                        $(this.byId("NewVisitsThisMonthIcon")).addClass("fa-arrow-circle-o-up");

                    } else {
                        $(this.byId("NewVisitsThisMonthBox")).addClass("bg-red-gradient");
                        $(this.byId("NewVisitsThisMonthIcon")).addClass("fa-arrow-circle-o-down");
                    }   

                    ReportsCommon.animateAndFillNumbers(this.byId("NewVisitsThisMonthCounter"), response.Entity.Counter, 4000);
                    ReportsCommon.animateAndFillNumbers(this.byId("NewVisitsMonthBeforeCounter"), response.Entity.CounterMonthBefore, 4000);

                    ReportsCommon.animateAndFillDecimals(this.byId("NewVisitsThisMonthPercent"), response.Entity.PercentMonthBefore, 4000);
                    
                });
        }
    }
} 