
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20171013228000)]
    public class DefaultDB_20171013_228000_AlterUserTable : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("RestrictedToCabinets").AsBoolean().NotNullable().WithDefaultValue(0)
                .AddColumn("Info").AsString(Int32.MaxValue).Nullable();
        }
    }
}
