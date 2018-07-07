namespace PatientManagement.PatientManagement {
    export interface MedicalSpecialtyRow {
        SpecialtyId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
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

        export declare const enum Fields {
            SpecialtyId = "SpecialtyId",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
