
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20171015021200)]
    public class DefaultDB_20171015_021200_AddTablePaymentCoupons : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("PaymentCoupons")
                .WithColumn("PaymentCouponId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CouponId").AsInt32().NotNullable()
                .WithColumn("PaymentId").AsInt64().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("PaymentCoupons")
                .WithColumn("PaymentCouponId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CouponId").AsInt32().NotNullable()
                .WithColumn("PaymentId").AsInt64().NotNullable();

            Alter.Table("Coupons")
                .AddColumn("EndDate").AsDateTime().Nullable()
                .AddColumn("MaxTimeUsing").AsInt32().Nullable();
        }
    }
}
