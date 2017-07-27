
namespace PatientManagement.Administration {
    export interface SentEmailsRow {
        SentEmailId?: number;
        FromEmail?: string;
        FromName?: string;
        Subject?: string;
        Body?: string;
        ToEmail?: string;
        ToName?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
    }

    export namespace SentEmailsRow {
        export const idProperty = 'SentEmailId';
        export const nameProperty = 'FromEmail';
        export const localTextPrefix = 'Administration.SentEmails';

        export namespace Fields {
            export declare const SentEmailId;
            export declare const FromEmail;
            export declare const FromName;
            export declare const Subject;
            export declare const Body;
            export declare const ToEmail;
            export declare const ToName;
            export declare const TenantId;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
            export declare const IsActive;
        }

        ['SentEmailId', 'FromEmail', 'FromName', 'Subject', 'Body', 'ToEmail', 'ToName', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'IsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

