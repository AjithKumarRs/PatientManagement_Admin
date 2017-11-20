namespace PatientManagement.Administration {
    export interface ExternalAccessRow {
        ExternalAccessCabinets?: number[];
        ExternalAccessId?: number;
        Name?: string;
        Url?: string;
        VisitedCount?: number;
        AccessType?: PatientManagement.AccessType;
        OutputFormat?: PatientManagement.OutputFormat;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ExternalAccessRow {
        export const idProperty = 'ExternalAccessId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.ExternalAccess';
        export const lookupKey = 'AdministrationTenants.ExternalAccess';

        export function getLookup(): Q.Lookup<ExternalAccessRow> {
            return Q.getLookup<ExternalAccessRow>('AdministrationTenants.ExternalAccess');
        }

        export namespace Fields {
            export declare const ExternalAccessCabinets: string;
            export declare const ExternalAccessId: string;
            export declare const Name: string;
            export declare const Url: string;
            export declare const VisitedCount: string;
            export declare const AccessType: string;
            export declare const OutputFormat: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        [
            'ExternalAccessCabinets', 
            'ExternalAccessId', 
            'Name', 
            'Url', 
            'VisitedCount', 
            'AccessType', 
            'OutputFormat', 
            'TenantId', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'IsActive', 
            'TenantName', 
            'InsertUserName', 
            'UpdateUserName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
