using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;
using NUglify.Helpers;
using PatientManagement.Migrations;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170609131800)]
    public class DefaultDB_20170609_131800_CreatedBillingsAndInvoices : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("PaymentsDetails", "PaymentDetailsId", x => x
                .WithColumn("Name").AsString(200).NotNullable()

            .WithColumn("BeneficiaryName").AsString(500).NotNullable()
			.WithColumn("BankName").AsString(500).NotNullable()
			.WithColumn("IBANBeneficient").AsString(500).NotNullable()

					.WithColumn("TenantId").AsInt32().NotNullable()
                    .WithColumn("InsertUserId").AsInt32().NotNullable()
                    .WithColumn("InsertDate").AsDateTime().NotNullable()
                    .WithColumn("UpdateUserId").AsInt32().Nullable()
                    .WithColumn("UpdateDateField").AsDateTime().Nullable()
            );

            this.CreateTableWithId64("Subscriptions", "SubscriptionId", x => x
            .WithColumn("Name").AsString().NotNullable()
                .WithColumn("OfferId").AsInt32().NotNullable()
                .ForeignKey("Offers", "OfferId")
                .WithColumn("TenantId").AsInt32().NotNullable()

                .WithColumn("SubscriptionEndDate").AsDateTime().Nullable()

                    .WithColumn("InsertUserId").AsInt32().NotNullable()
                    .WithColumn("InsertDate").AsDateTime().NotNullable()
                    .WithColumn("UpdateUserId").AsInt32().Nullable()
                    .WithColumn("UpdateDateField").AsDateTime().Nullable()
            );

            this.CreateTableWithId32("PaymentOptions", "PaymentOptionId", x => x
                .WithColumn("Days").AsInt32().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDateField").AsDateTime().Nullable());

            Insert.IntoTable("PaymentOptions").Row(new
            {
                Days = 30,
                Name = "Montly Payment",
                UpdateUserId = 1,
                UpdateDateField = DateTime.Now,
                InsertUserId = 1,
                InsertDate = DateTime.Now,
            }).Row(new
            {
                Days = 365,
                Name = "Year Payment",
                UpdateUserId = 1,
                UpdateDateField = DateTime.Now,
                InsertUserId = 1,
                InsertDate = DateTime.Now,
            });

           this.CreateTableWithId64("Payments", "PaymentId",x => x

            .WithColumn("SubscriptionId").AsInt64().NotNullable()
            .ForeignKey("Subscriptions", "SubscriptionId")

            .WithColumn("TenantId").AsInt32().NotNullable()

            .WithColumn("PaymentDetailsId").AsInt64().NotNullable()
            .ForeignKey("PaymentsDetails", "PaymentDetailsId")

               .WithColumn("PaymentOptionId").AsInt32().NotNullable()
               .ForeignKey("PaymentOptions", "PaymentOptionId")

            .WithColumn("CurrencyId").AsInt32().Nullable()
            .ForeignKey("Currencies", "Id")

            .WithColumn("Value").AsDecimal(8, 4).NotNullable()
            .WithColumn("PaymentStatus").AsInt32().Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDateField").AsDateTime().Nullable());

            Alter.Table("Tenants")
                .AddColumn("SubscriptionRequired").AsBoolean().NotNullable().WithDefaultValue(false)
                .AddColumn("SubscriptionId").AsInt64().Nullable()
                .ForeignKey("Subscriptions", "SubscriptionId");

        }
    }
}
