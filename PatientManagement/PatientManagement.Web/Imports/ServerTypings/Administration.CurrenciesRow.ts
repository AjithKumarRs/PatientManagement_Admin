
namespace PatientManagement.Administration {
    export interface CurrenciesRow {
        Id?: number;
        CurrencyId?: string;
        Name?: string;
        Rate?: number;
        BaseCurrency?: string;
        UpdateUserId?: string;
        UpdateDateField?: string;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CurrencyId';
        export const localTextPrefix = 'Administration.Currencies';

        export namespace Fields {
            export declare const Id;
            export declare const CurrencyId;
            export declare const Name;
            export declare const Rate;
            export declare const BaseCurrency;
            export declare const UpdateUserId;
            export declare const UpdateDateField;
        }

        ['Id', 'CurrencyId', 'Name', 'Rate', 'BaseCurrency', 'UpdateUserId', 'UpdateDateField'].forEach(x => (<any>Fields)[x] = x);
    }
}

