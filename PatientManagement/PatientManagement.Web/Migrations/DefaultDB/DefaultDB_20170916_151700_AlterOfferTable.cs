using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170916151700)]
    public class DefaultDB_20170916_151700_AlterOfferTable : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Offers")
                .AddColumn("MaximumPatientsPerTenant").AsInt32().Nullable();
        }
    }
}
