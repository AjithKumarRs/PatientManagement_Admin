
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170515070000)]
    public class PatientManagementDB_20170515_070000_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            #region Notes Table

            Action<ICreateTableWithColumnSyntax> addCols = expr => expr
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            addCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Notes")
                .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable());

            addCols(IfDatabase("Oracle")
                .Create.Table("Notes")
                .WithColumn("NoteID").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Notes", "NoteID");

            #endregion

            #region Patients Table

            Create.Table("Patients")
                .WithColumn("PatientId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("PersonalNumber").AsInt64().Nullable()
                .WithColumn("PhoneNumber").AsString(50).NotNullable()
                .WithColumn("Gender").AsInt32().Nullable()
                .WithColumn("FirstRegistrationDate").AsDateTime().Nullable()
                .WithColumn("Address").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Height").AsInt32().Nullable()
                .WithColumn("Weight").AsInt32().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion

            #region PatientHealth Table

            Create.Table("PatientHealth")
                .WithColumn("PatientId").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PatientHealth_Patients1", "Patients", "PatientId")
                .WithColumn("Diseases").AsString(Int32.MaxValue).Nullable()
                .WithColumn("MedicinesIntake").AsString(Int32.MaxValue).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion

            #region PatientsFileUploads Table

            Create.Table("PatientsFileUploads")
                .WithColumn("PatientFileUploadId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("PatientId").AsInt32().NotNullable()
                .ForeignKey("FK_PatientsFileUploads_Patients1", "Patients", "PatientId")
                .WithColumn("FilePath").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("Description").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion

            #region LifeStyles Table

            Create.Table("LifeStyles")
                .WithColumn("PatientId").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_LifeStyles_Patients1", "Patients", "PatientId")
                .WithColumn("BadHabits").AsString(Int32.MaxValue).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion

            #region VisitTypes Table

            Create.Table("VisitTypes")
                .WithColumn("VisitTypeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion


            #region Visits Table

            Create.Table("Visits")
                .WithColumn("VisitId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("PatientId").AsInt32().NotNullable()
                .ForeignKey("FK_Visits_Patients", "Patients", "PatientId")
                .WithColumn("VisitInfoId").AsInt32().NotNullable()
                .ForeignKey("FK_Visits_VisitTypes", "VisitTypes", "VisitTypeId")
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            #endregion

        }
    }
}
