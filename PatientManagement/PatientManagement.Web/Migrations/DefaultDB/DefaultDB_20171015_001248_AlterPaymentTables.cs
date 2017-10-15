
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20171015001248)]
    public class DefaultDB_20171015_001248_AlterPaymentTables : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Coupons")
                .WithColumn("CouponId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Key").AsString(2000).Nullable()
                .WithColumn("Name").AsString(2000).Nullable()
                .WithColumn("Discount").AsInt16().NotNullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("UsedOnDate").AsDateTime().Nullable()
                .WithColumn("IsUsed").AsInt32().Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDateField").AsDateTime().Nullable()
                .Nullable().WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("Payments")
                .AddColumn("CustomerName").AsString(2000).Nullable()
                .AddColumn("CustomerIban").AsString(2000).Nullable()
                .AddColumn("CustomerBankName").AsString(2000).Nullable()
                .AddColumn("ReasonForPayment").AsString(2000).Nullable()
                .AddColumn("CouponKey").AsString(500).Nullable()
                .AddColumn("CurrencyName").AsString(50).Nullable()
                .AddColumn("PaymentType").AsString(500).Nullable()
                .AddColumn("Description").AsString(2000).Nullable()
                .AddColumn("CouponDiscount").AsInt16().Nullable()
                .AddColumn("MonthsPayed").AsInt16().Nullable()
                .AddColumn("SubTotal").AsDecimal(8, 4).Nullable()
                .AddColumn("Receiver").AsString(2000).Nullable()
                .AddColumn("IBANReceiver").AsString(2000).Nullable()
                .AddColumn("BICReceiver").AsString(2000).Nullable()
                .AddColumn("BankNameReceiver").AsString(2000).Nullable();

            Alter.Table("Offers")
                .AddColumn("IsPublic").AsInt16().NotNullable().WithDefaultValue(1);
        }
    }
}
