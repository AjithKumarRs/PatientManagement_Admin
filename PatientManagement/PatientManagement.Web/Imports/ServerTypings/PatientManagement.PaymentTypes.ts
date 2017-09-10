namespace PatientManagement.PatientManagement {
    export enum PaymentTypes {
        BankTransfer = 0,
        CreditCard = 1
    }
    Serenity.Decorators.registerEnum(PaymentTypes, 'PatientManagement.PatientManagement.PaymentTypes');
}
