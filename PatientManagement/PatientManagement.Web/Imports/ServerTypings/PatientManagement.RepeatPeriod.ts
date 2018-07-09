namespace PatientManagement.PatientManagement {
    export enum RepeatPeriod {
        Day = 1,
        Week = 2,
        Month = 3,
        Year = 4
    }
    Serenity.Decorators.registerEnumType(RepeatPeriod, 'PatientManagement.PatientManagement.RepeatPeriod', 'PatientManagement.PatientManagement.Entities.RepeatPeriod');
}
