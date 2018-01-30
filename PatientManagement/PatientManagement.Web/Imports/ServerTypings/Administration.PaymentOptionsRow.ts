namespace PatientManagement.Administration {
    export interface PaymentOptionsRow {
        PaymentOptionId?: number;
        Months?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PaymentOptionsRow {
        export const idProperty = 'PaymentOptionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.PaymentOptions';
        export const lookupKey = 'Administration.PaymentOptions';

        export function getLookup(): Q.Lookup<PaymentOptionsRow> {
            return Q.getLookup<PaymentOptionsRow>('Administration.PaymentOptions');
        }

        export declare const enum Fields {
            PaymentOptionId = "PaymentOptionId",
            Months = "Months",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDateField = "UpdateDateField",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
