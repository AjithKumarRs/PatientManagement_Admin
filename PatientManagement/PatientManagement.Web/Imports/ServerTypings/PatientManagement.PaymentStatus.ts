namespace PatientManagement.PatientManagement {
    export enum PaymentStatus {
        Success = 0,
        Denied = 1,
        Pending = 2,
        Processing = 3,
        Failed = 4,
        Unclaimed = 5,
        Returned = 6,
        Onhold = 7,
        Blocked = 8,
        Cancelled = 9
    }
    Serenity.Decorators.registerEnum(PaymentStatus, 'PatientManagement.PatientManagement.Entities.PaymentStatus');
}
