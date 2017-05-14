namespace PatientManagement.PatientManagement {
    export interface ActivityRow {
        PatientId?: number;
        MovementAndTraining?: string;
        Profession?: string;
    }

    export namespace ActivityRow {
        export const idProperty = 'PatientId';
        export const nameProperty = 'MovementAndTraining';
        export const localTextPrefix = 'PatientManagement.Activity';

        export namespace Fields {
            export declare const PatientId: string;
            export declare const MovementAndTraining: string;
            export declare const Profession: string;
        }

        ['PatientId', 'MovementAndTraining', 'Profession'].forEach(x => (<any>Fields)[x] = x);
    }
}
