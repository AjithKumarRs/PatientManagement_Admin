using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;
using PatientManagement.Administration.Entities;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20171019105200)]
    public class DefaultDB_20171019_105200_AlterSubscriptionTable: AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Subscriptions")
                .AddColumn("FreeDaysFromOffer").AsInt32().NotNullable().WithDefaultValue(0);

        }
    }
}
