using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170916125100)]
    public class DefaultDB_20170916_125100_AlterTableSubscriptions : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Column("SubscriptionEndDate").OnTable("Subscriptions")
                .AsDateTime().Nullable();

            Alter.Table("Subscriptions")
                .AddColumn("Enabled").AsBoolean().NotNullable().WithDefaultValue(0);
        }
    }
}
