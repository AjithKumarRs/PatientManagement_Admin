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
        UpdateDateField?: string;
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

        export namespace Fields {
            export declare const CouponId: string;
            export declare const Key: string;
            export declare const Name: string;
            export declare const Discount: string;
            export declare const Description: string;
            export declare const EndDate: string;
            export declare const IsUsed: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDateField: string;
            export declare const IsActive: string;
            export declare const MaxTimeUsing: string;
            export declare const InsertUserName: string;
            export declare const UpdateUserName: string;
        }

        ['CouponId', 'Key', 'Name', 'Discount', 'Description', 'EndDate', 'IsUsed', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDateField', 'IsActive', 'MaxTimeUsing', 'InsertUserName', 'UpdateUserName'].forEach(x => (<any>Fields)[x] = x);
    }
}
