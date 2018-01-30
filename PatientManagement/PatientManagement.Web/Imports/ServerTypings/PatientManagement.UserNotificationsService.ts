namespace PatientManagement.PatientManagement {
    export namespace UserNotificationsService {
        export const baseUrl = 'PatientManagement/UserNotifications';

        export declare function Create(request: Serenity.SaveRequest<UserNotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CreateList(request: Serenity.SaveRequest<UserNotificationsRow[]>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserNotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserNotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserNotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/UserNotifications/Create",
            CreateList = "PatientManagement/UserNotifications/CreateList",
            Update = "PatientManagement/UserNotifications/Update",
            Delete = "PatientManagement/UserNotifications/Delete",
            Retrieve = "PatientManagement/UserNotifications/Retrieve",
            List = "PatientManagement/UserNotifications/List"
        }

        [
            'Create', 
            'CreateList', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserNotificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
