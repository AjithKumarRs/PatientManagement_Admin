using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170608084400)]
    public class DefaultDB_20170608_084400_CreatedTableCurrrencies : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Currencies", "Id", s => s
                .WithColumn("CurrencyId").AsString(3).NotNullable()
                .WithColumn("Name").AsString(50).Nullable()
                .WithColumn("Rate").AsDecimal(6, 4).NotNullable()
                .WithColumn("Enabled").AsBoolean().NotNullable().WithDefaultValue(false)
                .WithColumn("BaseCurrencyId").AsInt32().Nullable()
                    .ForeignKey("FK_Currencies_CurrencyId", "Currencies", "Id")
                    .WithColumn("UpdateUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDateField").AsDateTime().NotNullable());

            Insert.IntoTable("Currencies").Row(new
            {
                CurrencyId = "EUR",
                Name = "Euro",
                Rate = 1,
                Enabled = true,
                UpdateUserId = 1,
                UpdateDateField = DateTime.Now,

            });
            Alter.Table("Tenants")
                .AddColumn("CurrencyId").AsInt32()
                .NotNullable().WithDefaultValue(1);
        }
    }
}
