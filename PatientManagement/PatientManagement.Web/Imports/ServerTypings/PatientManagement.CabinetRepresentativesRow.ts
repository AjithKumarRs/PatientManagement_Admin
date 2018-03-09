namespace PatientManagement.PatientManagement {
    export interface CabinetRepresentativesRow {
        RepresentativeId?: number;
        UserId?: number;
        CabinetId?: number;
    }

    export namespace CabinetRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'CabinetRepresentatives';

        export declare const enum Fields {
            RepresentativeId = "RepresentativeId",
            UserId = "UserId",
            CabinetId = "CabinetId"
        }
    }
}
