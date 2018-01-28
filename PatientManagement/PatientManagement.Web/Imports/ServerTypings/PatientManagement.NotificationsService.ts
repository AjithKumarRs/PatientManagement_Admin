namespace PatientManagement.PatientManagement {
    export namespace NotificationsService {
        export const baseUrl = 'PatientManagement/Notifications';

        export declare function Create(request: Serenity.SaveRequest<NotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<NotificationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListForDropdown(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CountNotifications(request: Serenity.ListRequest, onSuccess?: (response: CountNotificationsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PatientManagement/Notifications/Create",
            Update = "PatientManagement/Notifications/Update",
            Delete = "PatientManagement/Notifications/Delete",
            Retrieve = "PatientManagement/Notifications/Retrieve",
            List = "PatientManagement/Notifications/List",
            ListForDropdown = "PatientManagement/Notifications/ListForDropdown",
            CountNotifications = "PatientManagement/Notifications/CountNotifications"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListForDropdown', 
            'CountNotifications'
        ].forEach(x => {
            (<any>NotificationsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
