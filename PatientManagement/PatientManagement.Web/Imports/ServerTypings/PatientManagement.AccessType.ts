namespace PatientManagement.PatientManagement {
    export enum AccessType {
        Public = 0,
        Private = 1
    }
    Serenity.Decorators.registerEnumType(AccessType, 'PatientManagement.PatientManagement.AccessType', 'PatientManagement.PatientManagement.Entities.AccessType');
}
