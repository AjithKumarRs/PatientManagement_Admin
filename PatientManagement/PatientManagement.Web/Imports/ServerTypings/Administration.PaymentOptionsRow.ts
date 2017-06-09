
namespace PatientManagement.Administration {
    export interface PaymentOptionsRow {
        PaymentOptionId?: number;
        Days?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDateField?: string;
    }

    export namespace PaymentOptionsRow {
        export const idProperty = 'PaymentOptionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.PaymentOptions';

        export namespace Fields {
            export declare const PaymentOptionId;
            export declare const Days;
            export declare const Name;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
        }

        ['PaymentOptionId', 'Days', 'Name', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

