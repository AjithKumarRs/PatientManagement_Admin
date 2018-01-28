namespace PatientManagement.Administration {
    export interface PaymentCouponsRow {
        PaymentCouponId?: number;
        CouponId?: number;
        PaymentId?: number;
    }

    export namespace PaymentCouponsRow {
        export const idProperty = 'PaymentCouponId';
        export const localTextPrefix = 'PaymentCoupons';

        export declare const enum Fields {
            PaymentCouponId = "PaymentCouponId",
            CouponId = "CouponId",
            PaymentId = "PaymentId"
        }
    }
}
