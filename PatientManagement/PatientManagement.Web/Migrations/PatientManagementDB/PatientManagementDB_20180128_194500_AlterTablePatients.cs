
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using PatientManagement.Administration.Entities;
using Serenity.Data;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180128194500)]
    public class PatientManagementDB_20180128_194500_AlterTablePatients : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: Issue #208 - Clean sql statement after all DBs are updated  - version ^1.2.650
            Execute.Sql(@"
                           ALTER TABLE Visits ALTER COLUMN PatientId INT NULL
                            ");
            Alter.Table("Users")
                .AddColumn("CanBeAssignedToVisit").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("Patients")
                .AddColumn("Picture").AsString(100).Nullable();

            Alter.Table("Visits")
                .AddColumn("AssignedUserId").AsInt32().Nullable()
                .ForeignKey("FK_Visits_AssignedUserId", "Users", "UserId");
        }
    }
}
