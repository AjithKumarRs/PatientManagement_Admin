using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170828160300)]
    public class DefaultDB_20170828_160300_AlterTablePaymentDetails : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("PaymentsDetails").AddColumn("PaymentType").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}
