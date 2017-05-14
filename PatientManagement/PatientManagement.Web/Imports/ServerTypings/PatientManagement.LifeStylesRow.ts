namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        PatientId?: number;
        RemarksForFoodTake?: string;
        Regime?: string;
        DailyMeals?: string;
        FavoriteFood?: string;
        NotEating?: string;
        BadHabits?: string;
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
            export declare const RemarksForFoodTake: string;
            export declare const Regime: string;
            export declare const DailyMeals: string;
            export declare const FavoriteFood: string;
            export declare const NotEating: string;
            export declare const BadHabits: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
            export declare const TenantId: string;
        }

        ['PatientId', 'RemarksForFoodTake', 'Regime', 'DailyMeals', 'FavoriteFood', 'NotEating', 'BadHabits', 'InsertUserId', 'InsertDate', 'PatientName', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}
