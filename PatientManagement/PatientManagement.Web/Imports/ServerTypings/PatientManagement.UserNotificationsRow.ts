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

        export declare const enum Fields {
            UserNotificationId = "UserNotificationId",
            NotificationId = "NotificationId",
            SeenAt = "SeenAt",
            UserId = "UserId",
            NotificationEntityType = "NotificationEntityType",
            NotificationEntityId = "NotificationEntityId",
            NotificationText = "NotificationText",
            NotificationInsertUserId = "NotificationInsertUserId",
            NotificationInsertDate = "NotificationInsertDate",
            NotificationTenantId = "NotificationTenantId"
        }
    }
}
