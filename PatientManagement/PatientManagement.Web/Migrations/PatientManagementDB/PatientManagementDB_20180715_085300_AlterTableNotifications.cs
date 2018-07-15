using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20180715085300)]
    public class PatientManagementDB_20180715_085300_AlterTableNotifications : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Notifications")
                .AddColumn("SeenByUserIds").AsString(Int32.MaxValue).Nullable()
                .AddColumn("CabinetId").AsInt32().Nullable()
                .ForeignKey("Cabinets", "CabinetId")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                ;
        }
    }
}
