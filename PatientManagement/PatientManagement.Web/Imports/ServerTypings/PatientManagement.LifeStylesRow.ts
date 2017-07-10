namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        PatientId?: number;
        Regime?: string;
        DailyMeals?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
        TenantId?: number;
    }

    export namespace LifeStylesRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'Regime';
        export const localTextPrefix = 'PatientManagement.LifeStyles';
        export const lookupKey = 'PatientManagement.LifeStyles';

        export function getLookup(): Q.Lookup<LifeStylesRow> {
            return Q.getLookup<LifeStylesRow>('PatientManagement.LifeStyles');
        }

        export namespace Fields {
            export declare const PatientId: string;
            export declare const Regime: string;
            export declare const DailyMeals: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const TenantId: string;
        }

        ['PatientId', 'Regime', 'DailyMeals', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
