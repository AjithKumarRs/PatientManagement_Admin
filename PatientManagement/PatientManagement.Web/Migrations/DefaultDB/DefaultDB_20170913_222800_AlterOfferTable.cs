
using System;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170913222800)]
    public class DefaultDB_20170913_222800_AlterOfferTable : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Offers")
                .AddColumn("MaximumCabinets").AsInt32().Nullable();
        }
    }
}
