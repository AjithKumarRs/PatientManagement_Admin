
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170516133200)]
    public class PatientManagementDB_20170516_133200_NewFieldsInPatientsLifestyles : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Patients")
                .AddColumn("WantedWeight").AsString(100)
                .Nullable().WithDefaultValue("");
            
            Alter.Table("LifeStyles")
                .AddColumn("RemarksForFoodTake").AsString(2000).Nullable().WithDefaultValue("")
                .AddColumn("Regime").AsString(2000).Nullable().WithDefaultValue("")
                .AddColumn("DailyMeals").AsString(Int32.MaxValue).Nullable()
                .AddColumn("FavoriteFood").AsString(2000).Nullable().WithDefaultValue("")
                .AddColumn("NotEating").AsString(2000).Nullable().WithDefaultValue("");

            Create.Table("Activity")
                //TODO: Issue #208 - After migration refactoring uncomment, Clean all sql statements in PatientManagementDB_20171017_220500_AlterTablePatientHealth
                //  .WithColumn("ActivityId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("PatientId").AsInt32().NotNullable().PrimaryKey()
                .ForeignKey("FK_Activity_Patients1", "Patients", "PatientId")
                .WithColumn("MovementAndTraining").AsString(2000).Nullable()
                .WithColumn("Profession").AsString(200).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();


        }
    }
}
