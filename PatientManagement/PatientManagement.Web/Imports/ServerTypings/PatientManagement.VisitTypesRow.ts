namespace PatientManagement.PatientManagement {
    export interface VisitTypesRow {
        VisitTypeId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace VisitTypesRow {
        export const idProperty = 'VisitTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.VisitTypes';
        export const lookupKey = 'PatientManagement.VisitTypes';

        export function getLookup(): Q.Lookup<VisitTypesRow> {
            return Q.getLookup<VisitTypesRow>('PatientManagement.VisitTypes');
        }

        export namespace Fields {
            export declare const VisitTypeId: string;
            export declare const Name: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
        }

        ['VisitTypeId', 'Name', 'InsertUserId', 'InsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
