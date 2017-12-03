
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[SentEmails]"), DisplayName("Sent Emails"), InstanceName("Sent Emails"), TwoLevelCached]

    [ReadPermission("PatientManagement:SentEmails:Read")]
    [InsertPermission("PatientManagement:SentEmails:Insert")]
    [DeletePermission("Administration:SentEmails:Delete")]
    [UpdatePermission("Administration:SentEmails:Update")]
    [LookupScript("AdministrationTenants.SentEmails",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class SentEmailsRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Sent Email Id"), Identity]
        public Int64? SentEmailId
        {
            get { return Fields.SentEmailId[this]; }
            set { Fields.SentEmailId[this] = value; }
        }

        [DisplayName("From Email"), Size(200), NotNull, QuickSearch, Updatable(false)]
        public String FromEmail
        {
            get { return Fields.FromEmail[this]; }
            set { Fields.FromEmail[this] = value; }
        }
        [DisplayName("Email Signature"), NotMapped, ReadOnly(true), HtmlNoteContentEditor]
        public string EmailSignature
        {
            get { return Fields.EmailSignature[this]; }
            set { Fields.EmailSignature[this] = value; }
        }


        [DisplayName("User Display Name"), NotMapped]
        public string UserDisplayName
        {
            get
            {
                var user = (UserDefinition)Serenity.Authorization.UserDefinition;

                return user.DisplayName;
            }
        }

        [DisplayName("From Name"), Size(200), NotNull, Updatable(false)]
        public String FromName
        {
            get { return Fields.FromName[this]; }
            set { Fields.FromName[this] = value; }
        }

        [DisplayName("Subject"), Size(200), NotNull, QuickFilter, Updatable(false)]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Body"), Size(-1), NotNull, HtmlContentEditor, Updatable(false)]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("To Email"), Size(200), NotNull, QuickFilter(), Updatable(false)]
        public String ToEmail
        {
            get { return Fields.ToEmail[this]; }
            set { Fields.ToEmail[this] = value; }
        }

        [DisplayName("To Name"), Size(200), NotNull, QuickFilter(), Updatable(false)]
        public String ToName
        {
            get { return Fields.ToName[this]; }
            set { Fields.ToName[this] = value; }
        }


        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, QuickFilter(), SortOrder(1, true)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public DateTime? UpdateDateField
        {
            get { return Fields.UpdateDateField[this]; }
            set { Fields.UpdateDateField[this] = value; }
        }
        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;


        public IIdField UpdateUserIdField { get; } = Fields.UpdateUserId;

        DateTimeField IUpdateLogRow.UpdateDateField { get; } = Fields.UpdateDateField;

        #endregion

        #region Tenant

        [Insertable(false), Updatable(false), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        [ReadPermission("Administration:Tenants")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        #endregion

        #region IIsActive

        [DisplayName("Is Active"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }


        #endregion

        IIdField IIdRow.IdField
        {
            get { return Fields.SentEmailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FromEmail; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SentEmailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SentEmailId;
            public StringField FromEmail;
            public StringField FromName;
            public StringField Subject;
            public StringField Body;
            public StringField ToEmail;
            public StringField ToName;
            public Int32Field TenantId;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int16Field IsActive;
            public StringField EmailSignature;

            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.SentEmails";
            }
        }


    }
}
