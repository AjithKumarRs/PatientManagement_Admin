namespace PatientManagement.PatientManagement {
    export enum OutputFormat {
        Ics = 0,
        Json = 1
    }
    Serenity.Decorators.registerEnumType(OutputFormat, 'PatientManagement.PatientManagement.OutputFormat', 'PatientManagement.PatientManagement.Entities.OutputFormat');
}
