namespace PatientManagement.PatientManagement {

    export class NewPatientsThisMonth extends Serenity.TemplatedWidget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.NewPatientsThisMonth({},
                response => {
                    $("#newPatientsThisMonth-counter").animate({
                        Counter: response.Entity.Counter
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });;
                });
        }
    }
} 