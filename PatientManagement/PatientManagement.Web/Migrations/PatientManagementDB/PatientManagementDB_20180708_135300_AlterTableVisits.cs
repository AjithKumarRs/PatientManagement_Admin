using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180708135300)]
    public class PatientManagementDB_20180708_135300_AlterTableVisits : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Visits")
                .AddColumn("RepeatTimes").AsInt32().Nullable().WithDefaultValue(1)
                .AddColumn("RepeatPeriod").AsInt16().Nullable().WithDefaultValue(0);
        }
    }
}
