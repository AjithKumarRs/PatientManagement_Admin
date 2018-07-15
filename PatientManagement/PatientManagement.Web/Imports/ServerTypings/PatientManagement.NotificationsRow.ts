namespace PatientManagement.PatientManagement {
    export interface NotificationsRow {
        NotificationId?: number;
        EntityType?: string;
        EntityId?: number;
        SeenByUser?: boolean;
        Text?: string;
        SeenByUserIds?: string;
        SeenByUserNames?: string;
        CabinetId?: number;
        CabinetName?: string;
        InsertUserDisplayName?: string;
        InsertUserPicture?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
    }

    export namespace NotificationsRow {
        export const idProperty = 'NotificationId';
        export const isActiveProperty = 'IsActive';
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
            SeenByUser = "SeenByUser",
            Text = "Text",
            SeenByUserIds = "SeenByUserIds",
            SeenByUserNames = "SeenByUserNames",
            CabinetId = "CabinetId",
            CabinetName = "CabinetName",
            InsertUserDisplayName = "InsertUserDisplayName",
            InsertUserPicture = "InsertUserPicture",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId"
        }
    }
}
