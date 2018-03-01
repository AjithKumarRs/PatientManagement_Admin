namespace PatientManagement.PatientManagement {

    export class NewVisitsThisMonth extends Serenity.TemplatedWidget<any> {
       constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            $(this.byId("NewVisitsThisMonthBoxLeft")).addClass("bg-" + ThemeHelper.getCurrentTheme() + "-gradient");
            
            ReportsEndpointService.NewVisitsThisMonth({},
                response => {
                    if (response.Entity.PercentMonthBefore >= 0) {
                        $(this.byId("NewVisitsThisMonthBox")).addClass("bg-green-gradient");
                        $(this.byId("NewVisitsThisMonthIcon")).addClass("fa-arrow-circle-o-up");

                    } else {
                        $(this.byId("NewVisitsThisMonthBox")).addClass("bg-red-gradient");
                        $(this.byId("NewVisitsThisMonthIcon")).addClass("fa-arrow-circle-o-down");
                    }   

                    this.byId("NewVisitsThisMonthCounter").animate({
                        Counter: response.Entity.Counter
                    }, {
                        duration: 4000,
                        easing: 'swing', 
                        step: function (now) {
                            $(this).text(Math.floor(now));
                        }
                        });

                    this.byId("NewVisitsMonthBeforeCounter").animate({
                        Counter: response.Entity.CounterMonthBefore
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.floor(now));
                        }
                    });
                    this.byId("NewVisitsThisMonthPercent").prop('Counter', 0).animate({
                        Counter: response.Entity.PercentMonthBefore
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(this.Counter.toFixed(2));
                        }
                    });
                });
        }
    }
} 