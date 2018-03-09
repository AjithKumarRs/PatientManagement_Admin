namespace PatientManagement.PatientManagement {
    export namespace MedicalSpecialtyService {
        export const baseUrl = 'PatientManagement/MedicalSpecialty';

        export declare function Create(request: Serenity.SaveRequest<MedicalSpecialtyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MedicalSpecialtyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MedicalSpecialtyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MedicalSpecialtyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/MedicalSpecialty/Create",
            Update = "PatientManagement/MedicalSpecialty/Update",
            Delete = "PatientManagement/MedicalSpecialty/Delete",
            Retrieve = "PatientManagement/MedicalSpecialty/Retrieve",
            Undelete = "PatientManagement/MedicalSpecialty/Undelete",
            ExcelImport = "PatientManagement/MedicalSpecialty/ExcelImport",
            List = "PatientManagement/MedicalSpecialty/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'Undelete', 
            'ExcelImport', 
            'List'
        ].forEach(x => {
            (<any>MedicalSpecialtyService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
