namespace PatientManagement.PatientManagement {
    export namespace ReportsVisitsEndpointService {
        export const baseUrl = 'PatientManagement/ReportsVisits';

        export declare function NewPatientsThisMonth(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewPatientsThisMonthResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function NewVisitsThisMonth(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewVisitsThisMonthResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function VisitTypesPerGenderChart(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitTypesPerGenderChartResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function VisitsPerMonthLineChart(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<VisitsPerMonthLineChartResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            NewPatientsThisMonth = "PatientManagement/ReportsVisits/NewPatientsThisMonth",
            NewVisitsThisMonth = "PatientManagement/ReportsVisits/NewVisitsThisMonth",
            VisitTypesPerGenderChart = "PatientManagement/ReportsVisits/VisitTypesPerGenderChart",
            VisitsPerMonthLineChart = "PatientManagement/ReportsVisits/VisitsPerMonthLineChart"
        }

        [
            'NewPatientsThisMonth', 
            'NewVisitsThisMonth', 
            'VisitTypesPerGenderChart', 
            'VisitsPerMonthLineChart'
        ].forEach(x => {
            (<any>ReportsVisitsEndpointService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
