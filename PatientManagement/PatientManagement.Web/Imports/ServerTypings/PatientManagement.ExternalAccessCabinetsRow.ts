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

        export namespace Fields {
            export declare const ExternalAccessCabinetId: string;
            export declare const ExternalAccessId: string;
            export declare const CabinetId: string;
        }

        [
            'ExternalAccessCabinetId', 
            'ExternalAccessId', 
            'CabinetId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
