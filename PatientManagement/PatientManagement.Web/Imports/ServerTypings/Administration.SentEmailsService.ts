namespace PatientManagement.Administration {
    export namespace SentEmailsService {
        export const baseUrl = 'Administration/SentEmails';

        export declare function Create(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveEmailSignature(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Administration/SentEmails/Create",
            Update = "Administration/SentEmails/Update",
            Delete = "Administration/SentEmails/Delete",
            Retrieve = "Administration/SentEmails/Retrieve",
            RetrieveEmailSignature = "Administration/SentEmails/RetrieveEmailSignature",
            List = "Administration/SentEmails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'RetrieveEmailSignature', 
            'List'
        ].forEach(x => {
            (<any>SentEmailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
