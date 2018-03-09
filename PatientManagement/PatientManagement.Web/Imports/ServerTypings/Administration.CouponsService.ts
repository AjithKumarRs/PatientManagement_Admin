namespace PatientManagement.Administration {
    export namespace CouponsService {
        export const baseUrl = 'Administration/Coupons';

        export declare function Create(request: Serenity.SaveRequest<CouponsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CouponsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CouponsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CouponsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Administration/Coupons/Create",
            Update = "Administration/Coupons/Update",
            Delete = "Administration/Coupons/Delete",
            Undelete = "Administration/Coupons/Undelete",
            Retrieve = "Administration/Coupons/Retrieve",
            List = "Administration/Coupons/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Undelete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CouponsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
