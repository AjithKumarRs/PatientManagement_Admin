namespace PatientManagement.PatientManagement {
    export interface VisitTypesRow {
        VisitTypeId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        PriceWithCurrencie?: string;
        Price?: number;
        Currencie?: string;
        InsertUserId?: number;
        InsertDate?: string;
        IsActive?: number;
        TenantName?: string;
        InsertUserName?: string;
        TenantId?: number;
    }

    export namespace VisitTypesRow {
        export const idProperty = 'VisitTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'PatientManagement.VisitTypes';
        export const lookupKey = 'PatientManagement.VisitTypes';

        export function getLookup(): Q.Lookup<VisitTypesRow> {
            return Q.getLookup<VisitTypesRow>('PatientManagement.VisitTypes');
        }

        export declare const enum Fields {
            VisitTypeId = "VisitTypeId",
            Name = "Name",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
            PriceWithCurrencie = "PriceWithCurrencie",
            Price = "Price",
            Currencie = "Currencie",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            IsActive = "IsActive",
            TenantName = "TenantName",
            InsertUserName = "InsertUserName",
            TenantId = "TenantId"
        }
    }
}
