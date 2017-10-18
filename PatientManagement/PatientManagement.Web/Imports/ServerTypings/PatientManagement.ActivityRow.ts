namespace PatientManagement.PatientManagement {
    export interface ActivityRow {
        PatientId?: number;
        MovementAndTraining?: string;
        Profession?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ActivityRow {
        export const idProperty = 'PatientId';
        export const isActiveProperty = 'IsActive';
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
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['PatientId', 'MovementAndTraining', 'Profession', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'IsActive', 'TenantId', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
