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
            Execute.Sql(@"
                            IF (OBJECT_ID('PK_PatientHealth', 'PK') IS NOT NULL)
                            BEGIN
                                ALTER TABLE [dbo].[PatientHealth] DROP CONSTRAINT PK_PatientHealth
                            END
                            ");


            Alter.Table("Activity")
                //  .AddColumn("ActivityId").AsInt32().Identity().PrimaryKey()
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDateField").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("LifeStyles")
            //    .AddColumn("LifeStylesId").AsInt32().Identity().PrimaryKey()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDateField").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Alter.Table("PatientHealth")
                .AddColumn("PatientHealthId").AsInt32().Identity().PrimaryKey().NotNullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDateField").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

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
