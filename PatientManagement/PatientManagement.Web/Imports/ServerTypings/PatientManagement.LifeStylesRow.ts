namespace PatientManagement.PatientManagement {
    export interface LifeStylesRow {
        PatientId?: number;
        Job?: string;
        Movement?: string;
        Training?: string;
        BadHabits?: string;
        InsertUserId?: number;
        InsertDate?: string;
        PatientName?: string;
    }

    export namespace LifeStylesRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'Job';
        export const localTextPrefix = 'PatientManagement.LifeStyles';
        export const lookupKey = 'PatientManagement.LifeStyles';

        export function getLookup(): Q.Lookup<LifeStylesRow> {
            return Q.getLookup<LifeStylesRow>('PatientManagement.LifeStyles');
        }

        export namespace Fields {
            export declare const PatientId: string;
            export declare const Job: string;
            export declare const Movement: string;
            export declare const Training: string;
            export declare const BadHabits: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const PatientName: string;
        }

        ['PatientId', 'Job', 'Movement', 'Training', 'BadHabits', 'InsertUserId', 'InsertDate', 'PatientName'].forEach(x => (<any>Fields)[x] = x);
    }
}
