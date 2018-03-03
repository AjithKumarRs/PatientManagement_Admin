declare var Chart: any;
namespace PatientManagement.PatientManagement {

    export class VisitsPerMonthLineChart extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.VisitTypesPerGenderChart({},
                response => {

                    //var config = {
                    //    type: 'pie',
                    //    data: {
                    //        datasets: response.Entity.datasets,
                    //        labels: response.Entity.Labels
                    //    },
                    //    options: {
                    //        responsive: true
                    //    }
                    //};

                    //var ctx = $(this.byId("VisitTypesPieChart")).get(0).getContext("2d", {});
                    //var myPie = new Chart(ctx, config);


                });
        }
    }
} 