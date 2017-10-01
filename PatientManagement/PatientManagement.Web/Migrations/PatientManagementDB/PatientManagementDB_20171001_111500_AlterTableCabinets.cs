using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20171001111500)]
    public class PatientManagementDB_20171001_111500_AlterTableCabinets : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CabinetWorkDays")
                .WithColumn("WorkDayId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("WeekDayId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("CabinetWorkDays")
                .WithColumn("WorkDayId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("WeekDayId").AsInt32().NotNullable();
        }
    }
}
