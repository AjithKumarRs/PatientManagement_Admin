namespace PatientManagement.PatientManagement {
    export enum PaymentStatus {
        Success = 0,
        Denied,
        Pending,
        Processing,
        Failed,
        Unclaimed,
        Returned,
        Onhold,
        Blocked,
        Cancelled
    }
    Serenity.Decorators.registerEnum(PaymentStatus, 'PatientManagement.PatientManagement.Entities.PaymentStatus');
}
