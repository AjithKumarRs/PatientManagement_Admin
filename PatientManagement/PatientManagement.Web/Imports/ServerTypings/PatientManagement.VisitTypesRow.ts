namespace PatientManagement.PatientManagement {
    export interface VisitTypesRow {
        VisitTypeId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        IsActive?: number;
        TenantId?: number;
    }

    export namespace VisitTypesRow {
        export const idProperty = 'VisitTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.VisitTypes';
        export const lookupKey = 'PatientManagement.VisitTypes';

        export function getLookup(): Q.Lookup<VisitTypesRow> {
            return Q.getLookup<VisitTypesRow>('PatientManagement.VisitTypes');
        }

        export namespace Fields {
            export declare const VisitTypeId: string;
            export declare const Name: string;
            export declare const BorderColor: string;
            export declare const BackgroundColor: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
        }

        [
            'VisitTypeId', 
            'Name', 
            'BorderColor', 
            'BackgroundColor', 
            'InsertUserId', 
            'InsertDate', 
            'IsActive', 
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
