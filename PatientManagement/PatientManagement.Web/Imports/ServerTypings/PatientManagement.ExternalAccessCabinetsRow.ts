namespace PatientManagement.PatientManagement {
    export interface ExternalAccessCabinetsRow {
        ExternalAccessCabinetId?: number;
        ExternalAccessId?: number;
        CabinetId?: number;
    }

    export namespace ExternalAccessCabinetsRow {
        export const idProperty = 'ExternalAccessCabinetId';
        export const localTextPrefix = 'ExternalAccessCabinets';
        export const lookupKey = 'PatientManagement.ExternalAccessCabinets';

        export function getLookup(): Q.Lookup<ExternalAccessCabinetsRow> {
            return Q.getLookup<ExternalAccessCabinetsRow>('PatientManagement.ExternalAccessCabinets');
        }

        export declare const enum Fields {
            ExternalAccessCabinetId = "ExternalAccessCabinetId",
            ExternalAccessId = "ExternalAccessId",
            CabinetId = "CabinetId"
        }
    }
}
