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

        export declare const enum Fields {
            SentEmailId = "SentEmailId",
            FromEmail = "FromEmail",
            FromName = "FromName",
            Subject = "Subject",
            Body = "Body",
            ToEmail = "ToEmail",
            ToName = "ToName",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            IsActive = "IsActive",
            EmailSignature = "EmailSignature",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
