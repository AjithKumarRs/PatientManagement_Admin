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

        export declare const enum Fields {
            WorkDayId = "WorkDayId",
            WeekDayId = "WeekDayId",
            CabinetId = "CabinetId"
        }
    }
}
