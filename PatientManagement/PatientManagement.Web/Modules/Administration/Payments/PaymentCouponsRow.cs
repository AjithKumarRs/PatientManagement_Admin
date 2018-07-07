namespace PatientManagement.Administration.Entities { 

    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Administration"), DisplayName("PaymentCoupons"), InstanceName("PaymentCoupons")]
    [ReadPermission(PermissionKeys.Payments.ReadPermission)]
    [ModifyPermission(PermissionKeys.Payments.ModifyPermission)]
    public sealed class PaymentCouponsRow : Row, IIdRow
    {
        [DisplayName("PaymentCoupon Id"), Column("PaymentCouponId"), Identity]
        public Int32? PaymentCouponId
        {
            get { return Fields.PaymentCouponId[this]; }
            set { Fields.PaymentCouponId[this] = value; }
        }

        [DisplayName("Coupon Id"), Column("CouponId"), NotNull]
        public Int32? CouponId
        {
            get { return Fields.CouponId[this]; }
            set { Fields.CouponId[this] = value; }
        }

        [DisplayName("Payment Id"), Column("PaymentId"), NotNull]
        public Int64? PaymentId
        {
            get { return Fields.PaymentId[this]; }
            set { Fields.PaymentId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentCouponId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentCouponsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaymentCouponId;
            public Int32Field CouponId;
            public Int64Field PaymentId;

            public RowFields()
                : base("PaymentCoupons")
            {
                LocalTextPrefix = "PaymentCoupons";
            }
        }
    }
}
