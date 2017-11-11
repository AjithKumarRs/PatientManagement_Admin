namespace PatientManagement.PatientManagement {
    export interface UserNotificationsRow {
        UserNotificationId?: number;
        NotificationId?: number;
        SeenAt?: string;
        UserId?: number;
        NotificationEntityType?: string;
        NotificationEntityId?: number;
        NotificationText?: string;
        NotificationInsertUserId?: number;
        NotificationInsertDate?: string;
        NotificationTenantId?: number;
    }

    export namespace UserNotificationsRow {
        export const idProperty = 'UserNotificationId';
        export const localTextPrefix = 'PatientManagement.UserNotifications';

        export namespace Fields {
            export declare const UserNotificationId: string;
            export declare const NotificationId: string;
            export declare const SeenAt: string;
            export declare const UserId: string;
            export declare const NotificationEntityType: string;
            export declare const NotificationEntityId: string;
            export declare const NotificationText: string;
            export declare const NotificationInsertUserId: string;
            export declare const NotificationInsertDate: string;
            export declare const NotificationTenantId: string;
        }

        [
            'UserNotificationId', 
            'NotificationId', 
            'SeenAt', 
            'UserId', 
            'NotificationEntityType', 
            'NotificationEntityId', 
            'NotificationText', 
            'NotificationInsertUserId', 
            'NotificationInsertDate', 
            'NotificationTenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
