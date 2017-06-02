
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[UserNotifications]"), DisplayName("User Notifications"), InstanceName("User Notifications"), TwoLevelCached]
    [ReadPermission("PatientManagement:UserNotifications")]
    [ModifyPermission("PatientManagement:UserNotifications")]
    public sealed class UserNotificationsRow : Row, IIdRow
    {
        [DisplayName("User Notification Id"), Identity]
        public Int32? UserNotificationId
        {
            get { return Fields.UserNotificationId[this]; }
            set { Fields.UserNotificationId[this] = value; }
        }

        [DisplayName("Notification"), Size(400),NotNull, ForeignKey("[dbo].[Notifications]", "NotificationId"), LeftJoin("jNotification"), TextualField("NotificationText")]
        public Int32? NotificationId
        {
            get { return Fields.NotificationId[this]; }
            set { Fields.NotificationId[this] = value; }
        }

        [DisplayName("Seen At"), Size(150)]
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime? SeenAt
        {
            get { return Fields.SeenAt[this]; }
            set { Fields.SeenAt[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Notification Entity Type"), Expression("jNotification.[EntityType]")]
        public String NotificationEntityType
        {
            get { return Fields.NotificationEntityType[this]; }
            set { Fields.NotificationEntityType[this] = value; }
        }

        [DisplayName("Notification Entity Id"), Expression("jNotification.[EntityID]")]
        public Int64? NotificationEntityId
        {
            get { return Fields.NotificationEntityId[this]; }
            set { Fields.NotificationEntityId[this] = value; }
        }

        [DisplayName("Notification Text"), Expression("jNotification.[Text]")]
        public String NotificationText
        {
            get { return Fields.NotificationText[this]; }
            set { Fields.NotificationText[this] = value; }
        }

        [DisplayName("Notification Insert User Id"), Expression("jNotification.[InsertUserId]")]
        public Int32? NotificationInsertUserId
        {
            get { return Fields.NotificationInsertUserId[this]; }
            set { Fields.NotificationInsertUserId[this] = value; }
        }

        [DisplayName("Notification Insert Date"), Expression("jNotification.[InsertDate]")]
        public DateTime? NotificationInsertDate
        {
            get { return Fields.NotificationInsertDate[this]; }
            set { Fields.NotificationInsertDate[this] = value; }
        }

        [DisplayName("Notification Tenant Id"), Expression("jNotification.[TenantId]")]
        public Int32? NotificationTenantId
        {
            get { return Fields.NotificationTenantId[this]; }
            set { Fields.NotificationTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserNotificationId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserNotificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserNotificationId;
            public Int32Field NotificationId;
            public DateTimeField SeenAt;
            public Int32Field UserId;

            public StringField NotificationEntityType;
            public Int64Field NotificationEntityId;
            public StringField NotificationText;
            public Int32Field NotificationInsertUserId;
            public DateTimeField NotificationInsertDate;
            public Int32Field NotificationTenantId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.UserNotifications";
            }
        }
    }
}
