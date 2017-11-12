
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using PatientManagement.Administration.Entities;
using Serenity.Data;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20171112164500)]
    public class PatientManagementDB_20171112_164500_AddedTableMedicalSpecialties: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("MedicalSpecialties")
                .WithColumn("SpecialtyId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDateField").AsDateTime()
                .Nullable().WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);


            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("UserSpecialties")
                .WithColumn("UserSpecialtyId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("SpecialtyId").AsInt32().NotNullable()
                .WithColumn("UserId").AsInt32().NotNullable();

            Alter.Table("Cabinets")
                .AddColumn("Description").AsString(Int32.MaxValue).Nullable()
                .AddColumn("City").AsString(500).Nullable()
                .AddColumn("Country").AsString(500).Nullable()
                .AddColumn("PhoneNumber").AsInt32().Nullable();
        }
    }
}
