
namespace PatientManagement.PatientManagement {
    export interface NotificationsRow {
        NotificationId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertUserDisplayName?: string;
        InsertUserPicture?: string;
        InsertDate?: string;
        InsertDateFormated?: string;
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
            export declare const InsertUserDisplayName;
            export declare const InsertUserPicture;
            export declare const InsertDate;
            export declare const InsertDateFormated;
        }

        ['NotificationId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertUserDisplayName', 'InsertUserPicture', 'InsertDate', 'InsertDateFormated'].forEach(x => (<any>Fields)[x] = x);
    }
}

