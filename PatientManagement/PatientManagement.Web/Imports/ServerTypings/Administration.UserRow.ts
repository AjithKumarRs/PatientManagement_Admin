namespace PatientManagement.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        RestrictedToCabinets?: number;
        Info?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        WebSite?: string;
        PhoneNumber?: string;
        EmailSignature?: string;
        UsersInRole?: number[];
        Cabinets?: number[];
        Specialties?: number[];
        Password?: string;
        PasswordConfirm?: string;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }

        export declare const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            RestrictedToCabinets = "RestrictedToCabinets",
            Info = "Info",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            WebSite = "WebSite",
            PhoneNumber = "PhoneNumber",
            EmailSignature = "EmailSignature",
            UsersInRole = "UsersInRole",
            Cabinets = "Cabinets",
            Specialties = "Specialties",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
