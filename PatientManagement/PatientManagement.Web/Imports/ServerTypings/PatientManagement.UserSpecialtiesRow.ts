namespace PatientManagement.PatientManagement {
    export interface UserSpecialtiesRow {
        UserSpecialtyId?: number;
        UserId?: number;
        SpecialtyId?: number;
    }

    export namespace UserSpecialtiesRow {
        export const idProperty = 'UserSpecialtyId';
        export const localTextPrefix = 'UserSpecialties';

        export declare const enum Fields {
            UserSpecialtyId = "UserSpecialtyId",
            UserId = "UserId",
            SpecialtyId = "SpecialtyId"
        }
    }
}
