namespace PatientManagement.Administration {
    export interface PaymentsDetailsRow {
        PaymentDetailsId?: number;
        BeneficiaryName?: string;
        BankName?: string;
        Name?: string;
        PaymentType?: PatientManagement.PaymentTypes;
        IbanBeneficient?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
        TenantName?: string;
        TenantCurrencyId?: number;
    }

    export namespace PaymentsDetailsRow {
        export const idProperty = 'PaymentDetailsId';
        export const isActiveProperty = 'IsActive';
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
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            TenantName = "TenantName",
            TenantCurrencyId = "TenantCurrencyId"
        }
    }
}
