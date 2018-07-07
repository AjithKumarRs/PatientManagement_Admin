namespace PatientManagement.PatientManagement {
    export namespace PatientsFileUploadsService {
        export const baseUrl = 'PatientManagement/PatientsFileUploads';

        export declare function Create(request: Serenity.SaveRequest<PatientsFileUploadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PatientsFileUploadsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PatientsFileUploadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PatientsFileUploadsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/PatientsFileUploads/Create",
            Update = "PatientManagement/PatientsFileUploads/Update",
            Delete = "PatientManagement/PatientsFileUploads/Delete",
            Undelete = "PatientManagement/PatientsFileUploads/Undelete",
            Retrieve = "PatientManagement/PatientsFileUploads/Retrieve",
            List = "PatientManagement/PatientsFileUploads/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PatientsFileUploadsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
