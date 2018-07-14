using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;
using PatientManagement.Administration.Entities;

namespace PatientManagement.Migrations.DefaultDB
{
    [Migration(20180714095200)]
    public class DefaultDB_20180714_095200_AlterUpdateDate : AutoReversingMigration
    {
        public override void Up()
        {
            //TODO: Issue #208 - Clean sql statement after all DBs are updated  - version ^1.2.650
            Execute.Sql(@"
IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'ExternalAccess'))
BEGIN
    EXEC sp_RENAME 'ExternalAccess.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Coupons'))
BEGIN
    EXEC sp_RENAME 'Coupons.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Currencies'))
BEGIN
    EXEC sp_RENAME 'Currencies.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'PaymentsDetails'))
BEGIN
    EXEC sp_RENAME 'PaymentsDetails.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Subscriptions'))
BEGIN
    EXEC sp_RENAME 'Subscriptions.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'PaymentOptions'))
BEGIN
    EXEC sp_RENAME 'PaymentOptions.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Payments'))
BEGIN
    EXEC sp_RENAME 'Payments.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Tenants'))
BEGIN
    EXEC sp_RENAME 'Tenants.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

IF EXISTS(SELECT 1 FROM sys.columns WHERE [name] = N'UpdateDateField'
           AND [object_id] = OBJECT_ID(N'Roles'))
BEGIN
    EXEC sp_RENAME 'Roles.UpdateDateField', 'UpdateDate' , 'COLUMN'
END;

");
        }
    }
}
