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
        EmailSignature?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace SentEmailsRow {
        export const idProperty = 'SentEmailId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'FromEmail';
        export const localTextPrefix = 'Administration.SentEmails';
        export const lookupKey = 'AdministrationTenants.SentEmails';

        export function getLookup(): Q.Lookup<SentEmailsRow> {
            return Q.getLookup<SentEmailsRow>('AdministrationTenants.SentEmails');
        }

        export namespace Fields {
            export declare const SentEmailId: string;
            export declare const FromEmail: string;
            export declare const FromName: string;
            export declare const Subject: string;
            export declare const Body: string;
            export declare const ToEmail: string;
            export declare const ToName: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const EmailSignature: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        [
            'SentEmailId', 
            'FromEmail', 
            'FromName', 
            'Subject', 
            'Body', 
            'ToEmail', 
            'ToName', 
            'TenantId', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'IsActive', 
            'EmailSignature', 
            'TenantName', 
            'InsertUserName', 
            'UpdateUserName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
