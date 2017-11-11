namespace PatientManagement.PatientManagement {
    export interface CabinetRepresentativesRow {
        RepresentativeId?: number;
        UserId?: number;
        CabinetId?: number;
    }

    export namespace CabinetRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'CabinetRepresentatives';

        export namespace Fields {
            export declare const RepresentativeId: string;
            export declare const UserId: string;
            export declare const CabinetId: string;
        }

        [
            'RepresentativeId', 
            'UserId', 
            'CabinetId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
