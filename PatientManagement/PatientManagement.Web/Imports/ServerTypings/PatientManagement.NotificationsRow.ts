
namespace PatientManagement.PatientManagement {
    export interface NotificationsRow {
        NotificationId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace NotificationsRow {
        export const idProperty = 'NotificationId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'PatientManagement.Notifications';

        export namespace Fields {
            export declare const NotificationId;
            export declare const EntityType;
            export declare const EntityId;
            export declare const Text;
            export declare const InsertUserId;
            export declare const InsertDate;
        }

        ['NotificationId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

