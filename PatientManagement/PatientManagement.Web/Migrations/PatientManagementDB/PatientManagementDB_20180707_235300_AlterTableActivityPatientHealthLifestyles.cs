using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180707235300)]
    public class PatientManagementDB_20180707_235300_AlterTableActivityPatientHealthLifestyles : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: Issue #208 - Clean sql statement after all DBs are updated  - version ^1.2.650
            Execute.Sql(@"
IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Activity'))
BEGIN
    EXEC sp_RENAME 'Activity.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'LifeStyles'))
BEGIN
    EXEC sp_RENAME 'LifeStyles.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'PatientHealth'))
BEGIN
    EXEC sp_RENAME 'PatientHealth.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Cabinets'))
BEGIN
    EXEC sp_RENAME 'Cabinets.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'MedicalSpecialties'))
BEGIN
    EXEC sp_RENAME 'MedicalSpecialties.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'PaymentsDetails'))
BEGIN
    EXEC sp_RENAME 'PaymentsDetails.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Payments'))
BEGIN
    EXEC sp_RENAME 'Payments.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'SentEmails'))
BEGIN
    EXEC sp_RENAME 'SentEmails.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;


IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Offers'))
BEGIN
    EXEC sp_RENAME 'Offers.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;
");

            Alter.Table("Patients")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            Alter.Table("PatientsFileUploads")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                ;

            Alter.Table("VisitTypes")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable();

            Alter.Table("Visits")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                ;

            Alter.Table("PaymentsDetails")
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                ;

            Alter.Table("Payments")
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                ;
        }
    }
}
