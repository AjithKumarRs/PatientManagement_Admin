namespace PatientManagement.PatientManagement {
    export namespace ReportsEndpointService {
        export const baseUrl = 'PatientManagement/Reports';

        export declare function NewPatientsThisMonth(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewPatientsThisMonthResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function NewVisitsThisMonth(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<NewVisitsThisMonthResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            NewPatientsThisMonth = "PatientManagement/Reports/NewPatientsThisMonth",
            NewVisitsThisMonth = "PatientManagement/Reports/NewVisitsThisMonth"
        }

        [
            'NewPatientsThisMonth', 
            'NewVisitsThisMonth'
        ].forEach(x => {
            (<any>ReportsEndpointService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
