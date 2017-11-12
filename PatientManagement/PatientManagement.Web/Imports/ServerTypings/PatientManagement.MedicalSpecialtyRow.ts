namespace PatientManagement.PatientManagement {
    export interface MedicalSpecialtyRow {
        SpecialtyId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace MedicalSpecialtyRow {
        export const idProperty = 'SpecialtyId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.MedicalSpecialty';
        export const lookupKey = 'PatientManagement.MedicalSpecialties';

        export function getLookup(): Q.Lookup<MedicalSpecialtyRow> {
            return Q.getLookup<MedicalSpecialtyRow>('PatientManagement.MedicalSpecialties');
        }

        export namespace Fields {
            export declare const SpecialtyId: string;
            export declare const Name: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        [
            'SpecialtyId', 
            'Name', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'IsActive', 
            'InsertUserName', 
            'UpdateUserName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
