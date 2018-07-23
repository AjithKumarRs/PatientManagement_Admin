namespace PatientManagement.PatientManagement {
    export namespace CabinetRepresentativesService {
        export const baseUrl = 'PatientManagement/CabinetRepresentatives';

        export declare function Create(request: Serenity.SaveRequest<CabinetRepresentativesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CabinetRepresentativesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CabinetRepresentativesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CabinetRepresentativesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/CabinetRepresentatives/Create",
            Update = "PatientManagement/CabinetRepresentatives/Update",
            Delete = "PatientManagement/CabinetRepresentatives/Delete",
            Retrieve = "PatientManagement/CabinetRepresentatives/Retrieve",
            List = "PatientManagement/CabinetRepresentatives/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CabinetRepresentativesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
