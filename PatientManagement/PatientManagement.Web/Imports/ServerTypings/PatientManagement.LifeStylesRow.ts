namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        LifeStyleId?: number;
        PatientId?: number;
        Regime?: string;
        DailyMeals?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        PatientName?: string;
        TenantId?: number;
    }

    export namespace LifeStylesRow {
        export const idProperty = 'LifeStyleId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Regime';
        export const localTextPrefix = 'PatientManagement.LifeStyles';
        export const lookupKey = 'PatientManagement.LifeStyles';

        export function getLookup(): Q.Lookup<LifeStylesRow> {
            return Q.getLookup<LifeStylesRow>('PatientManagement.LifeStyles');
        }

        export namespace Fields {
            export declare const LifeStyleId: string;
            export declare const PatientId: string;
            export declare const Regime: string;
            export declare const DailyMeals: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
            export declare const PatientName: string;
            export declare const TenantId: string;
        }

        [
            'LifeStyleId', 
            'PatientId', 
            'Regime', 
            'DailyMeals', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDateField', 
            'IsActive', 
            'TenantName', 
            'InsertUserName', 
            'UpdateUserName', 
            'PatientName', 
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
