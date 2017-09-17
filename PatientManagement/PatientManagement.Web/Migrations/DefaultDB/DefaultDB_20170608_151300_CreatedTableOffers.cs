using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170608151300)]

    public class DefaultDB_20170608_151300_CreatedTableOffers: AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Offers", "OfferId", s => s
            .WithColumn("Name").AsString(500).NotNullable()
            .WithColumn("MaximumSubscriptionTime").AsInt32().Nullable()
            .WithColumn("MaximumUsersPerTenant").AsInt32().Nullable()
            .WithColumn("MaximumVisitsPerTenant").AsInt32().Nullable()
            .WithColumn("ExpirationDate").AsDateTime().Nullable()
            .WithColumn("Description").AsString(int.MaxValue).Nullable()
                .WithColumn("Price").AsDecimal(8, 4).NotNullable()
                .WithColumn("Enabled").AsBoolean().NotNullable().WithDefaultValue(false)
                .WithColumn("CurrencyId").AsInt32().NotNullable()
                .ForeignKey("FK_OffersCurrencies_CurrencyId", "Currencies", "Id")
                .WithColumn("RoleId").AsInt32().NotNullable()
                .ForeignKey("FK_Roles_RoleId", "Roles", "RoleId")
                .WithColumn("UpdateUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDateField").AsDateTime().NotNullable()
            );

            Insert.IntoTable("Offers")
                .Row(new
                {
                    Name= "Demo offer",
                    Description = "Free plan with maximum using",
                    Price = Decimal.Zero,
                    MaximumSubscriptionTime = 30,
                    CurrencyId = 1,
                    RoleId = 2,
                    UpdateUserId = 1,
                    UpdateDateField = DateTime.Now
                });
        }
    }
}
