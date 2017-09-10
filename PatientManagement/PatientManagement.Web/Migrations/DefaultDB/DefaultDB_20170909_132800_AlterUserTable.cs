
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170909132800)]
    public class DefaultDB_20170909_132800_AlterUserTable: AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("PhoneNumber").AsString(200).Nullable();
        }
    }
}
