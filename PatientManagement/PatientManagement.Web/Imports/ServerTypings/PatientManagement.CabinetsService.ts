namespace PatientManagement.PatientManagement {
    export namespace CabinetsService {
        export const baseUrl = 'PatientManagement/Cabinets';

        export declare function Create(request: Serenity.SaveRequest<CabinetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CabinetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveWorkHours(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkHours>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CabinetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CabinetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/Cabinets/Create",
            Update = "PatientManagement/Cabinets/Update",
            Delete = "PatientManagement/Cabinets/Delete",
            RetrieveWorkHours = "PatientManagement/Cabinets/RetrieveWorkHours",
            Retrieve = "PatientManagement/Cabinets/Retrieve",
            List = "PatientManagement/Cabinets/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'RetrieveWorkHours', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CabinetsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
