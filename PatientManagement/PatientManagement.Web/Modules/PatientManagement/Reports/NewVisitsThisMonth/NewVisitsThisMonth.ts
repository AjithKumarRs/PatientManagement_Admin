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
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
        }
    }
} 