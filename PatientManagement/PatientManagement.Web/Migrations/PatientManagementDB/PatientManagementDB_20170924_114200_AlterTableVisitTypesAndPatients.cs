using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170924114200)]
    public class PatientManagementDB_20170924_114200_AlterTableVisitTypesAndPatients : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Patients")
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("VisitTypes")
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }
    }
}
