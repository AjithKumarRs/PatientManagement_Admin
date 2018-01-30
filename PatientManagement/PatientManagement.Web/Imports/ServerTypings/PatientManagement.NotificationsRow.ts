namespace PatientManagement.PatientManagement {
    export interface NotificationsRow {
        NotificationId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
        InsertUserPicture?: string;
        TenantId?: number;
        TenantName?: string;
    }

    export namespace NotificationsRow {
        export const idProperty = 'NotificationId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'PatientManagement.Notifications';
        export const lookupKey = 'PatientManagement.Notifications';

        export function getLookup(): Q.Lookup<NotificationsRow> {
            return Q.getLookup<NotificationsRow>('PatientManagement.Notifications');
        }

        export declare const enum Fields {
            NotificationId = "NotificationId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName",
            InsertUserPicture = "InsertUserPicture",
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
