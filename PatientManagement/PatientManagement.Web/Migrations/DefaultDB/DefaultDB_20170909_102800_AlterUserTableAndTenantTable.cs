
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170909102800)]
    public class DefaultDB_20170909_102800_AlterUserTableAndTenantTable : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Tenants")
                .AddColumn("TenantWebSite").AsString(200).Nullable()
                .AddColumn("TenantImage").AsString().Nullable()
                .AddColumn("WorkHoursStart").AsInt16().Nullable()
                .AddColumn("WorkHoursEnd").AsInt16().Nullable()
                .AddColumn("OverrideUsersEmailSignature").AsBoolean().Nullable()
                .AddColumn("TenantEmailSignature").AsString(Int32.MaxValue).Nullable()
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDateField").AsDateTime().Nullable();

            Alter.Table("Users")
                .AddColumn("WebSite").AsString(200).Nullable()
                .AddColumn("EmailSignature").AsString(Int32.MaxValue).Nullable();

        }
    }
}
