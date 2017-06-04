
using System;
using FluentMigrator;
using FluentMigrator.Builders.Create.Table;

namespace PatientManagement.Migrations.PatientManagementDB
{
    [Migration(20170531110800)]
    public class PatientManagementDB_20170531_110800_NewTablesNotificationsAndUserNotifications: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Notifications")
                .WithColumn("NotificationId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            Create.Table("UserNotifications")
                .WithColumn("UserNotificationId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("NotificationId").AsInt32().NotNullable()
                .ForeignKey("FK_UserNotifications_NotificationId", "Notifications", "NotificationId")
                .WithColumn("SeenAt").AsDateTime().Nullable()
                .WithColumn("UserId").AsInt32().NotNullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1); ;
        }
    }
}
