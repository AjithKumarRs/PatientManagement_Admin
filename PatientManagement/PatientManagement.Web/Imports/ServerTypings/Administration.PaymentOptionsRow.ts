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

        export namespace Fields {
            export declare const PaymentOptionId: string;
            export declare const Months: string;
            export declare const Name: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['PaymentOptionId', 'Months', 'Name', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
