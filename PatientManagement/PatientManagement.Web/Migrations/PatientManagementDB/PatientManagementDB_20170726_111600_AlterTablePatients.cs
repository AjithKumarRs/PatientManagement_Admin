using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170726111600)]
    public class PatientManagementDB_20170726_111600_AlterTablePatients: AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Patients")
                .AddColumn("Email").AsString(100).Nullable()
                .AddColumn("NotifyOnChange").AsBoolean().NotNullable().WithDefaultValue(0);
        }
    }
}
