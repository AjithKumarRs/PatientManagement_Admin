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
");
        }
    }
}
