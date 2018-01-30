using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20171019180500)]
    public class PatientManagementDB_20171019_180500_AlterTable_LifeStyles_Activity : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: Issue #208 - Clean all sql statements here, see PatientManagementDB_20170515_070000_Initial
            Execute.Sql(@"
                            IF (OBJECT_ID('[PK_LifeStyles]', 'PK') IS NOT NULL)
                            BEGIN
                                ALTER TABLE [dbo].[LifeStyles] DROP CONSTRAINT [PK_LifeStyles]
                            END

                            IF (OBJECT_ID('PK_Activity', 'PK') IS NOT NULL)
                            BEGIN
                                ALTER TABLE [dbo].[Activity] DROP CONSTRAINT PK_Activity
                            END
                            ");


            // TODO: Move to initial migration - issue #208
            Alter.Table("LifeStyles")
                .AddColumn("LifeStyleId").AsInt32().Identity().PrimaryKey().NotNullable();

            // TODO: Move to initial migration - issue #208
            Alter.Table("Activity")
                .AddColumn("ActivityId").AsInt32().Identity().PrimaryKey().NotNullable();

            //TODO: Issue #208 - Clean all sql statements here, see PatientManagementDB_20170515_070000_Initial
            Execute.Sql(@"
                          IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
                                WHERE CONSTRAINT_TYPE = 'PRIMARY KEY' AND TABLE_NAME = 'LifeStyles' 
                                AND TABLE_SCHEMA ='dbo')
                                BEGIN
                                   ALTER TABLE LifeStyles ADD CONSTRAINT PK_LifeStyleId PRIMARY KEY (LifeStyleId)
                                END
                            ");
            //TODO: Issue #208 - Clean all sql statements here, see PatientManagementDB_20170515_070000_Initial
            Execute.Sql(@"
                          IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
                                WHERE CONSTRAINT_TYPE = 'PRIMARY KEY' AND TABLE_NAME = 'Activity' 
                                AND TABLE_SCHEMA ='dbo')
                                BEGIN
                                   ALTER TABLE Activity ADD CONSTRAINT PK_ActivityId PRIMARY KEY (ActivityId)
                                END
                            ");
        }
    }
}
