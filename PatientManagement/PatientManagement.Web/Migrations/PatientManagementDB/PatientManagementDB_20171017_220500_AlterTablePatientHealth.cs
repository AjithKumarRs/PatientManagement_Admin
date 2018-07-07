using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20171017220500)]
    public class PatientManagementDB_20171017_220500_AlterTablePatientHealth : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: Issue #208 - Clean all sql statements here, see PatientManagementDB_20170515_070000_Initial
            Execute.Sql(@"
                            IF (OBJECT_ID('PK_PatientHealth', 'PK') IS NOT NULL)
                            BEGIN
                                ALTER TABLE [dbo].[PatientHealth] DROP CONSTRAINT PK_PatientHealth
                            END
                            ");
            // TODO: Move to initial migration - issue #208
            Alter.Table("Activity")
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            
            // TODO: Move to initial migration - issue #208
            Alter.Table("LifeStyles")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            // TODO: Move to initial migration - issue #208
            Alter.Table("PatientHealth")
                .AddColumn("PatientHealthId").AsInt32().Identity().PrimaryKey().NotNullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);


            //TODO: Issue #208 - Clean all sql statements here, see PatientManagementDB_20170515_070000_Initial
            Execute.Sql(@"
                          IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
                                WHERE CONSTRAINT_TYPE = 'PRIMARY KEY' AND TABLE_NAME = 'PatientHealth' 
                                AND TABLE_SCHEMA ='dbo')
                                BEGIN
                                   ALTER TABLE PatientHealth ADD CONSTRAINT PK_PatientHealthId PRIMARY KEY (PatientHealthId)
                                END
                            ");
        }
    }
}
