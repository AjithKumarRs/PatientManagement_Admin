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

        export declare const enum Fields {
            PaymentDetailsId = "PaymentDetailsId",
            BeneficiaryName = "BeneficiaryName",
            BankName = "BankName",
            Name = "Name",
            PaymentType = "PaymentType",
            IbanBeneficient = "IbanBeneficient",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
