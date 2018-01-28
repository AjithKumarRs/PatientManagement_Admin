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

        export declare const enum Fields {
            Id = "Id",
            OfferId = "OfferId",
            LanguageId = "LanguageId",
            Name = "Name",
            Description = "Description"
        }
    }
}
