namespace PatientManagement.PatientManagement {
    export interface CabinetWorkDaysRow {
        WorkDayId?: number;
        WeekDayId?: WeekDays;
        CabinetId?: number;
    }

    export namespace CabinetWorkDaysRow {
        export const idProperty = 'WorkDayId';
        export const localTextPrefix = 'CabinetWorkDays';
        export const lookupKey = 'PatientManagement.CabinetWorkDays';

        export function getLookup(): Q.Lookup<CabinetWorkDaysRow> {
            return Q.getLookup<CabinetWorkDaysRow>('PatientManagement.CabinetWorkDays');
        }

        export namespace Fields {
            export declare const WorkDayId: string;
            export declare const WeekDayId: string;
            export declare const CabinetId: string;
        }

        [
            'WorkDayId', 
            'WeekDayId', 
            'CabinetId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
