﻿namespace PatientManagement.PatientManagement {

    export class NewPatientsThisMonth extends Serenity.TemplatedWidget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.NewPatientsThisMonth({},
                response => {
                  

                    this.byId("NewPatientsThisMonthCounter").animate({
                        Counter: response.Entity.Counter
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                        });


                    this.byId("NewPatientsMonthBeforeCounter").animate({
                        Counter: response.Entity.CounterMonthBefore
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });

                    this.byId("NewPatientsThisMonthPercent").prop('Counter', 0).animate({
                        Counter: response.Entity.PercentMonthBefore
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(this.Counter.toFixed(2));
                        }
                        });

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