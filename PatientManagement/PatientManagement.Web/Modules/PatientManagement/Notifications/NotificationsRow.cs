
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Notifications]"), DisplayName("Notifications"), InstanceName("Notifications"), TwoLevelCached]
    [ReadPermission("PatientManagement:Notifications:Read")]
    [ModifyPermission("PatientManagement:Notifications:Modify")]
    [LookupScript("PatientManagement.Notifications", LookupType = typeof(MultiTenantRowLookupScript<>))]

    public sealed class NotificationsRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow
    {
        [DisplayName("Notification Id"), SortOrder(1, true), Identity, Column("NotificationId"), Updatable(false)]
        public Int32? NotificationId
        {
            get { return Fields.NotificationId[this]; }
            set { Fields.NotificationId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(100), NotNull, QuickSearch, Updatable(false)]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Entity Id"), Column("EntityID"), NotNull, Updatable(false)]
        public Int64? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }

        [DisplayName("Text"),  NotNull, Updatable(false), QuickSearch]
        public String Text
        {
            get { return Fields.Text[this]; }
            set { Fields.Text[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert User"), NotMapped]
        public String InsertUserDisplayName
        {
            get { return Fields.InsertUserDisplayName[this]; }
            set { Fields.InsertUserDisplayName[this] = value; }
        }

        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NotificationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntityType; }
        }
        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public NotificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NotificationId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;


            public StringField InsertUserDisplayName;
            public readonly Int32Field TenantId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Notifications";
            }
        }

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
    }
}
