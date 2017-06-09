
namespace PatientManagement.Administration {
    export interface PaymentsDetailsRow {
        PaymentDetailsId?: number;
        BeneficiaryName?: string;
        BankName?: string;
        IbanBeneficient?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
    }

    export namespace PaymentsDetailsRow {
        export const idProperty = 'PaymentDetailsId';
        export const nameProperty = 'BeneficiaryName';
        export const localTextPrefix = 'Administration.PaymentsDetails';

        export namespace Fields {
            export declare const PaymentDetailsId;
            export declare const BeneficiaryName;
            export declare const BankName;
            export declare const IbanBeneficient;
            export declare const TenantId;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
        }

        ['PaymentDetailsId', 'BeneficiaryName', 'BankName', 'IbanBeneficient', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

