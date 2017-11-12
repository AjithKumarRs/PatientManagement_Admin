namespace PatientManagement.PatientManagement {
    export interface CabinetsRow {
        CabinetId?: number;
        WorkDays?: number[];
        Name?: string;
        Description?: string;
        City?: string;
        Country?: string;
        Representatives?: number[];
        UserSpecialties?: string[];
        WorkHoursStart?: number;
        WorkHoursEnd?: number;
        PhoneNumber?: number;
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

    export namespace CabinetsRow {
        export const idProperty = 'CabinetId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.Cabinets';
        export const lookupKey = 'PatientManagement.Cabinets';

        export function getLookup(): Q.Lookup<CabinetsRow> {
            return Q.getLookup<CabinetsRow>('PatientManagement.Cabinets');
        }

        export namespace Fields {
            export declare const CabinetId: string;
            export declare const WorkDays: string;
            export declare const Name: string;
            export declare const Description: string;
            export declare const City: string;
            export declare const Country: string;
            export declare const Representatives: string;
            export declare const UserSpecialties: string;
            export declare const WorkHoursStart: string;
            export declare const WorkHoursEnd: string;
            export declare const PhoneNumber: string;
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
            'CabinetId', 
            'WorkDays', 
            'Name', 
            'Description', 
            'City', 
            'Country', 
            'Representatives', 
            'UserSpecialties', 
            'WorkHoursStart', 
            'WorkHoursEnd', 
            'PhoneNumber', 
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
