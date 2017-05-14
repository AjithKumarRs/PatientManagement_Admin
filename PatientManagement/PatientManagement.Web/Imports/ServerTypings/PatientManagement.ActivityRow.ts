namespace PatientManagement.PatientManagement {
    export interface ActivityRow {
        PatientId?: number;
        MovementAndTraining?: string;
        Profession?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace ActivityRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'MovementAndTraining';
        export const localTextPrefix = 'PatientManagement.Activity';
        export const lookupKey = 'PatientManagement.LifeStyles';

        export function getLookup(): Q.Lookup<ActivityRow> {
            return Q.getLookup<ActivityRow>('PatientManagement.LifeStyles');
        }

        export namespace Fields {
            export declare const PatientId: string;
            export declare const MovementAndTraining: string;
            export declare const Profession: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
        }

        ['PatientId', 'MovementAndTraining', 'Profession', 'InsertUserId', 'InsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}
