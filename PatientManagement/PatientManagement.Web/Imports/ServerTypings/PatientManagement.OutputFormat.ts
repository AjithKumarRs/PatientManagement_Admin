namespace PatientManagement.PatientManagement {
    export enum OutputFormat {
        Ics = 0,
        Json = 1
    }
    Serenity.Decorators.registerEnum(OutputFormat, 'PatientManagement.PatientManagement.Entities.OutputFormat');
}
