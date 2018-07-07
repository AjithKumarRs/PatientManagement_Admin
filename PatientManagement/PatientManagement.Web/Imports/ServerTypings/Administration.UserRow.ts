namespace PatientManagement.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        CanBeAssignedToVisit?: number;
        RestrictedToCabinets?: number;
        Info?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        WebSite?: string;
        PhoneNumber?: string;
        EmailSignature?: string;
        UsersInRole?: number[];
        Cabinets?: number[];
        Specialties?: number[];
        Password?: string;
        PasswordConfirm?: string;
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

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DisplayName';
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
            CanBeAssignedToVisit = "CanBeAssignedToVisit",
            RestrictedToCabinets = "RestrictedToCabinets",
            Info = "Info",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            WebSite = "WebSite",
            PhoneNumber = "PhoneNumber",
            EmailSignature = "EmailSignature",
            UsersInRole = "UsersInRole",
            Cabinets = "Cabinets",
            Specialties = "Specialties",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
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
