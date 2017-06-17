namespace PatientManagement.Administration {
    export interface OfferLangRow {
        Id?: number;
        OfferId?: number;
        LanguageId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace OfferLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.OfferLang';

        export namespace Fields {
            export declare const Id: string;
            export declare const OfferId: string;
            export declare const LanguageId: string;
            export declare const Name: string;
            export declare const Description: string;
        }

        ['Id', 'OfferId', 'LanguageId', 'Name', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}
