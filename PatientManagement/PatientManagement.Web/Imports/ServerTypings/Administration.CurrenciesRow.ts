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

        export declare const enum Fields {
            Id = "Id",
            CurrencyId = "CurrencyId",
            Name = "Name",
            Rate = "Rate",
            Enabled = "Enabled",
            BaseCurrencyId = "BaseCurrencyId",
            BaseCurrencyName = "BaseCurrencyName",
            UpdateUserId = "UpdateUserId",
            UserName = "UserName",
            UpdateDateField = "UpdateDateField"
        }
    }
}
