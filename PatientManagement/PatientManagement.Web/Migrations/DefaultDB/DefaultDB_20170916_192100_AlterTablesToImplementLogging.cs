using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170916192100)]
    public class DefaultDB_20170916_192100_AlterTablesToImplementLogging : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Roles")
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDateField").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("Tenants")
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("Offers")
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Execute.Sql("ALTER TABLE Subscriptions DROP CONSTRAINT DF_Subscriptions_IsActive");
            Execute.Sql("ALTER TABLE Offers ALTER COLUMN UpdateUserId INT NULL");
            Execute.Sql("ALTER TABLE Offers ALTER COLUMN UpdateDateField datetime NULL");

            Alter.Table("Subscriptions")
                .AlterColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }
    }
}
