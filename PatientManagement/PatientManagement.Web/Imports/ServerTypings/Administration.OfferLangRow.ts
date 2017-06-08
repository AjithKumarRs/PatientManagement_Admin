
namespace PatientManagement.Administration {
    export interface OfferLangRow {
        Id?: number;
        OfferId?: number;
        LanguageId?: number;
        OfferName?: string;
        Description?: string;
    }

    export namespace OfferLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OfferName';
        export const localTextPrefix = 'Administration.OfferLang';

        export namespace Fields {
            export declare const Id;
            export declare const OfferId;
            export declare const LanguageId;
            export declare const OfferName;
            export declare const Description;
        }

        ['Id', 'OfferId', 'LanguageId', 'OfferName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

