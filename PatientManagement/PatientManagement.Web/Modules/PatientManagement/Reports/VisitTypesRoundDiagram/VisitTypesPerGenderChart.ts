declare var Chart: any;
namespace PatientManagement.PatientManagement {

    export class VisitTypesPerGenderChart extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            
            ReportsEndpointService.VisitTypesPerGenderChart({},
                response => {

                    var config = {
                        type: 'pie',
                        data: {
                            datasets: response.Entity.datasets,
                            labels: response.Entity.Labels
                        },
                        options: {
                            responsive: true
                        }
                    };

                    var ctx = $(this.byId("VisitTypesPieChart")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);

                    if (response.Entity.datasets[0]) {
                        this.byId("PatientsTotalMales").animate({
                            Counter: response.Entity.datasets[0].PatientsTotal
                        }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });

                        this.byId("VisitsTotalMales").animate({
                            Counter: response.Entity.datasets[0].VisitsTotal
                        }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        $(this.byId("MostReservedVisitTypeMales")).text(response.Entity.datasets[0].MostReservedVisitType);
                    }
                    if (response.Entity.datasets[1]) {
                        this.byId("PatientsTotalFemales").animate({
                            Counter: response.Entity.datasets[1].PatientsTotal
                        }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        this.byId("VisitsTotalFemales").animate({
                            Counter: response.Entity.datasets[1].VisitsTotal
                        }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        $(this.byId("MostReservedVisitTypeFemales")).text(response.Entity.datasets[1].MostReservedVisitType);
                    }
                });


        }
    }
} 