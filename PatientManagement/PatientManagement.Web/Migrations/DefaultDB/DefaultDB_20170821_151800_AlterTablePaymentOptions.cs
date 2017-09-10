using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20170821151800)]
    public class DefaultDB_20170821_151800_AlterTablePaymentOptions : AutoReversingMigration
    {
        public override void Up()
        {
            Rename.Column("Days").OnTable("PaymentOptions").To("Months");
        }
    }
}
