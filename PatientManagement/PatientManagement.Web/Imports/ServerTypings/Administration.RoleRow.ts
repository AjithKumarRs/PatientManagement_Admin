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

        export namespace Fields {
            export declare const RoleId: string;
            export declare const RoleName: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const UsersInRole: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['RoleId', 'RoleName', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'IsActive', 'UsersInRole', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
