namespace PatientManagement.Administration {
    export interface PaymentCouponsRow {
        PaymentCouponId?: number;
        CouponId?: number;
        PaymentId?: number;
    }

    export namespace PaymentCouponsRow {
        export const idProperty = 'PaymentCouponId';
        export const localTextPrefix = 'PaymentCoupons';

        export namespace Fields {
            export declare const PaymentCouponId: string;
            export declare const CouponId: string;
            export declare const PaymentId: string;
        }

        ['PaymentCouponId', 'CouponId', 'PaymentId'].forEach(x => (<any>Fields)[x] = x);
    }
}
