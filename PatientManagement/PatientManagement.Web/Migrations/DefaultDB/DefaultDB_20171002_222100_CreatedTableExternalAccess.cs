using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20171002222100)]
    public class DefaultDB_20171002_222100_CreatedTableExternalAccess: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ExternalAccess")
                .WithColumn("ExternalAccessId").AsInt32().Identity().PrimaryKey()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Url").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("VisitedCount").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("AccessType").AsInt32().NotNullable()
                .WithColumn("OutputFormat").AsInt32().NotNullable()

                .WithColumn("TenantId").AsInt32().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime()
                .Nullable().WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("ExternalAccessCabinets")
                .WithColumn("ExternalAccessCabinetId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("ExternalAccessId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("ExternalAccessCabinets")
                .WithColumn("ExternalAccessCabinetId").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CabinetId").AsInt32().NotNullable()
                .WithColumn("ExternalAccessId").AsInt32().NotNullable();
        }
    }
}
