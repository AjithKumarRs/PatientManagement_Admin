declare var Chart: any;
namespace PatientManagement.PatientManagement {

    export class VisitTypesPerGenderChart extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            
            ReportsVisitsEndpointService.VisitTypesPerGenderChart({},
                response => {

                    var config = {
                        type: 'pie',
                        data: response.Entity,
                        options: {
                            responsive: true
                        }
                    };

                    var ctx = $(this.byId("VisitTypesPieChart")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);

                    if (response.Entity.datasets[0]) {
                        ReportsCommon.animateAndFillNumbers(this.byId("PatientsTotalMales"), response.Entity.datasets[0].PatientsTotal, 2000 );
                        
                        ReportsCommon.animateAndFillNumbers(this.byId("VisitsTotalMales"), response.Entity.datasets[0].VisitsTotal, 2000);
                        
                        $(this.byId("MostReservedVisitTypeMales")).text(response.Entity.datasets[0].MostReservedVisitType);
                    }
                    if (response.Entity.datasets[1]) {
                        ReportsCommon.animateAndFillNumbers(this.byId("PatientsTotalFemales"), response.Entity.datasets[1].PatientsTotal, 2000);

                        ReportsCommon.animateAndFillNumbers(this.byId("VisitsTotalFemales"), response.Entity.datasets[1].VisitsTotal, 2000);
                        
                        $(this.byId("MostReservedVisitTypeFemales")).text(response.Entity.datasets[1].MostReservedVisitType);
                    }
                });


        }
    }
} 