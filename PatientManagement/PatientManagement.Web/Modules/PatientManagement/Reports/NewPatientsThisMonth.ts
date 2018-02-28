namespace PatientManagement.PatientManagement {

    export class NewPatientsThisMonth extends Serenity.TemplatedWidget<any> {

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);

            ReportsEndpointService.NewPatientsThisMonth({},
                response => {
                    console.log("Jooohu");
                });
        }
    }
} 