namespace PatientManagement.PatientManagement {
    export interface UserSpecialtiesRow {
        UserSpecialtyId?: number;
        UserId?: number;
        SpecialtyId?: number;
    }

    export namespace UserSpecialtiesRow {
        export const idProperty = 'UserSpecialtyId';
        export const localTextPrefix = 'UserSpecialties';

        export namespace Fields {
            export declare const UserSpecialtyId: string;
            export declare const UserId: string;
            export declare const SpecialtyId: string;
        }

        [
            'UserSpecialtyId', 
            'UserId', 
            'SpecialtyId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
