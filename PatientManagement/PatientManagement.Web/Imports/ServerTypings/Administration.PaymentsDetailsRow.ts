namespace PatientManagement.Administration {
    export interface PaymentsDetailsRow {
        PaymentDetailsId?: number;
        BeneficiaryName?: string;
        BankName?: string;
        Name?: string;
        PaymentType?: PatientManagement.PaymentTypes;
        IbanBeneficient?: string;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        TenantName?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PaymentsDetailsRow {
        export const idProperty = 'PaymentDetailsId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.PaymentsDetails';
        export const lookupKey = 'Administration.PaymentsDetails';

        export function getLookup(): Q.Lookup<PaymentsDetailsRow> {
            return Q.getLookup<PaymentsDetailsRow>('Administration.PaymentsDetails');
        }

        export namespace Fields {
            export declare const PaymentDetailsId: string;
            export declare const BeneficiaryName: string;
            export declare const BankName: string;
            export declare const Name: string;
            export declare const PaymentType: string;
            export declare const IbanBeneficient: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const TenantName: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['PaymentDetailsId', 'BeneficiaryName', 'BankName', 'Name', 'PaymentType', 'IbanBeneficient', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'TenantName', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
