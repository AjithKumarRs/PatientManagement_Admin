declare var Chart: any;
namespace PatientManagement.PatientManagement {

    export class VisitsPerMonthLineChart extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.VisitsPerMonthLineChart({},
                response => {
                    var config = {
                        type: 'line',
                        data: {
                            datasets: response.Entity.datasets,
                            labels: response.Entity.labels
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: false
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                          //  labelString: 'Month'
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                        //    labelString: 'Value'
                                        }
                                    }
                                ]
                            }
                        },
                    };

                    var ctx = $(this.byId("VisitsPerMonthLineChart")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);


                });
        }
    }
} 