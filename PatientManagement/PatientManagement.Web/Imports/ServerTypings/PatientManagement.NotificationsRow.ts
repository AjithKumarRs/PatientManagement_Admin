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

        export namespace Fields {
            export declare const NotificationId: string;
            export declare const EntityType: string;
            export declare const EntityId: string;
            export declare const Text: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const InsertUserDisplayName: string;
            export declare const InsertUserPicture: string;
            export declare const TenantId: string;
            export declare const TenantName: string;
        }

        ['NotificationId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName', 'InsertUserPicture', 'TenantId', 'TenantName'].forEach(x => (<any>Fields)[x] = x);
    }
}
