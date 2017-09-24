
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using PatientManagement.Administration.Entities;
using Serenity.Data;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170913194200)]
    public class PatientManagementDB_20170913_194200_CreatedTableClinics : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Cabinets")
                .WithColumn("CabinetId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("WorkHoursStart").AsInt16().Nullable()
                .WithColumn("WorkHoursEnd").AsInt16().Nullable()

                .WithColumn("TenantId").AsInt32().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDateField").AsDateTime()
                .Nullable().WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CabinetRepresentatives")
                .WithColumn("RepresentativeID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("UserId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("CabinetRepresentatives")
                .WithColumn("RepresentativeID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("UserId").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "CabinetRepresentatives", "RepresentativeID");

            var connection = SqlConnections.NewFor<TenantRow>();
            var tenantLst = connection.List<TenantRow>();
            foreach (var tenantRow in tenantLst)
            {

                Insert.IntoTable("Cabinets").Row(new
                {
                    Name = "First Room",
                    TenantId = tenantRow.TenantId,
                    UpdateUserId = 1,
                    UpdateDateField = DateTime.Now,
                    InsertUserId = 1,
                    InsertDate = DateTime.Now,
                    IsActive = 1
                });

            }

            Alter.Table("Visits")
                .AddColumn("CabinetId").AsInt32().NotNullable()
                .ForeignKey("Cabinets", "CabinetId").WithDefaultValue(1);
        }
    }
}
