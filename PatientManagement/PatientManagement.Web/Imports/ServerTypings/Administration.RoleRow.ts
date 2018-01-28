namespace PatientManagement.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        UsersInRole?: number[];
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = 'Administration.Role';

        export function getLookup(): Q.Lookup<RoleRow> {
            return Q.getLookup<RoleRow>('Administration.Role');
        }

        export declare const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            IsActive = "IsActive",
            UsersInRole = "UsersInRole",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
