namespace PatientManagement.Administration {
    export interface CurrenciesRow {
        Id?: number;
        CurrencyId?: string;
        Name?: string;
        Rate?: number;
        Enabled?: boolean;
        BaseCurrencyId?: number;
        BaseCurrencyName?: string;
        UpdateUserId?: number;
        UserName?: string;
        UpdateDateField?: string;
    }

    export namespace CurrenciesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CurrencyId';
        export const localTextPrefix = 'Administration.Currencies';
        export const lookupKey = 'Administration.Currencies';

        export function getLookup(): Q.Lookup<CurrenciesRow> {
            return Q.getLookup<CurrenciesRow>('Administration.Currencies');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const CurrencyId: string;
            export declare const Name: string;
            export declare const Rate: string;
            export declare const Enabled: string;
            export declare const BaseCurrencyId: string;
            export declare const BaseCurrencyName: string;
            export declare const UpdateUserId: string;
            export declare const UserName: string;
            export declare const UpdateDateField: string;
        }

        [
            'Id', 
            'CurrencyId', 
            'Name', 
            'Rate', 
            'Enabled', 
            'BaseCurrencyId', 
            'BaseCurrencyName', 
            'UpdateUserId', 
            'UserName', 
            'UpdateDateField'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
