using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180223150500)]
    public class PatientManagementDB_20180223_150500_AlterTablePatients : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Patients")
                .AddColumn("City").AsString(200).Nullable()
                .AddColumn("Country").AsString(200).Nullable();
        }
    }
}
