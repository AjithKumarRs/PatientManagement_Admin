namespace PatientManagement.Administration {
    export interface CouponsRow {
        CouponId?: number;
        Key?: string;
        Name?: string;
        Discount?: number;
        Description?: string;
        EndDate?: string;
        IsUsed?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        MaxTimeUsing?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace CouponsRow {
        export const idProperty = 'CouponId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Key';
        export const localTextPrefix = 'Administration.Coupons';
        export const lookupKey = 'Administration.Coupons';

        export function getLookup(): Q.Lookup<CouponsRow> {
            return Q.getLookup<CouponsRow>('Administration.Coupons');
        }

        export declare const enum Fields {
            CouponId = "CouponId",
            Key = "Key",
            Name = "Name",
            Discount = "Discount",
            Description = "Description",
            EndDate = "EndDate",
            IsUsed = "IsUsed",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            MaxTimeUsing = "MaxTimeUsing",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
