using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170618180300)]
    public class DefaultDB_20170618_180300_AlterSubscriptionTable : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Subscriptions")
                .AddColumn("IsActive").AsBoolean().NotNullable().WithDefaultValue(false)
                .AddColumn("ActivatedOn").AsDateTime().Nullable()
                .AddColumn("DeactivatedOn").AsDateTime().Nullable();
        }
    }
}
