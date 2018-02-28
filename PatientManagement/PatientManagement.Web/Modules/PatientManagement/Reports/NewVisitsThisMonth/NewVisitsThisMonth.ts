namespace PatientManagement.PatientManagement {

    export class NewVisitsThisMonth extends Serenity.TemplatedWidget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.NewVisitsThisMonth({},
                response => {
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
                    console.log(response.Entity.PercentMonthBefore);
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