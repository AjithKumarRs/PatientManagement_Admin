namespace PatientManagement.Administration {
    export interface SentEmailsRow {
        SentEmailId?: number;
        FromEmail?: string;
        FromName?: string;
        Subject?: string;
        Body?: string;
        ToEmail?: string;
        ToName?: string;
        EmailSignature?: string;
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
            EmailSignature = "EmailSignature",
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
