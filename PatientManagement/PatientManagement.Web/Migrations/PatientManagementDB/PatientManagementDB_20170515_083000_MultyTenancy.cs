namespace PatientManagement.Migrations.PatientManagementDB
{
    using System;
    using FluentMigrator;

    [Migration(20170515083000)]

    public class PatientManagementDB_20170515_083000_MultyTenancy : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Patients")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

            Alter.Table("PatientHealth")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

            Alter.Table("PatientsFileUploads")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

            Alter.Table("LifeStyles")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

            Alter.Table("VisitTypes")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);

            Alter.Table("Visits")
                .AddColumn("TenantId").AsInt32()
                .NotNullable().WithDefaultValue(1);
            
        }
    }
}
