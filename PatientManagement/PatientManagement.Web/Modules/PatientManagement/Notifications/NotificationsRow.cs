
using System.Collections.Generic;
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
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
    [InsertPermission(PatientManagementPermissionKeys.Notifications.InsertPermission)]
    [ReadPermission(PatientManagementPermissionKeys.Notifications.ReadPermission)]
    [DeletePermission(PatientManagementPermissionKeys.Notifications.DeletePermission)]
    [LookupScript("PatientManagement.Notifications", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class NotificationsRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Notification Id"), SortOrder(1, true), Identity, Column("NotificationId"), Updatable(false)]
        public Int32? NotificationId
        {
            get { return Fields.NotificationId[this]; }
            set { Fields.NotificationId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(100), NotNull, QuickSearch, Updatable(false)]
        [ReadPermission(PatientManagementPermissionKeys.Notifications.ExternalEntityColumns)]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Entity Id"), Column("EntityID"), NotNull, Updatable(false)]
        [ReadPermission(PatientManagementPermissionKeys.Notifications.ExternalEntityColumns)]
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

        [DisplayName("Seen By User Ids")]
        [MinSelectLevel(SelectLevel.Always)]
        public String SeenByUserIds
        {
            get { return Fields.SeenByUserIds[this]; }
            set { Fields.SeenByUserIds[this] = value; }
        }
        [DisplayName("Seen By User Names"), NotMapped]
        public String SeenByUserNames
        {
            get { return Fields.SeenByUserNames[this]; }
            set { Fields.SeenByUserNames[this] = value; }
        }
        [DisplayName("Is seen by user")]
        [Expression(@"
        CASE WHEN (T0.[SeenByUserIds] IS NOT NULL AND T0.[SeenByUserIds] LIKE Concat('%""', @LogedUser, '""%') ) 
            THEN
                1
            ELSE
                0
        END
        ")]
        [BooleanEditor, QuickFilter(), Insertable(false), Updatable(false)]
        [LookupInclude]
        [MinSelectLevel(SelectLevel.Always)]
        public bool? SeenByUser
        {
            get { return Fields.SeenByUser[this]; }
            set { Fields.SeenByUser[this] = value; }
        }

        [DisplayName("Cabinet"), NotNull, ForeignKey("[dbo].[Cabinets]", "CabinetId"), LeftJoin("jCabinets"), TextualField("CabinetName")]
        [LookupEditor(typeof(CabinetsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? CabinetId
        {
            get => Fields.CabinetId[this];
            set => Fields.CabinetId[this] = value;
        }

        [DisplayName("Cabinet Name"), Expression("jCabinets.[Name]"), QuickSearch]
        [QuickFilter()]
        public String CabinetName
        {
            get { return Fields.CabinetName[this]; }
            set { Fields.CabinetName[this] = value; }
        }

        [DisplayName("Insert User Id"), ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [NotNull, Insertable(false), Updatable(false), QuickFilter()]
        [LookupEditor(typeof(UserRow), FilterField = "IsActive", FilterValue = 1)]
        public new Int32? InsertUserId
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

        [DisplayName("Insert User Picture"), NotMapped]
        public String InsertUserPicture
        {
            get { return Fields.InsertUserPicture[this]; }
            set { Fields.InsertUserPicture[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(false)]
        [DisplayName("Insert Date"), QuickFilter()]
        [SortOrder(1, true)]
        public new DateTime? InsertDate
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

        public static readonly RowFields Fields = new RowFields().Init();

        public NotificationsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field NotificationId;
            public StringField EntityType;
            public Int64Field EntityId;
            public BooleanField SeenByUser;
            public StringField Text;
            public StringField SeenByUserIds;
            public StringField SeenByUserNames;
            public Int32Field CabinetId;
            public StringField CabinetName;
            public StringField InsertUserDisplayName;
            public StringField InsertUserPicture;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Notifications";
            }
        }
        
    }
}
