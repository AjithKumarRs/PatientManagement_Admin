
using PatientManagement.Common;
using PatientManagement.PatientManagement.Entities;
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
    [ReadPermission(PermissionKeys.SentEmails.ReadPermission)]
    [InsertPermission(PermissionKeys.SentEmails.InsertPermission)]
    [UpdatePermission(PermissionKeys.SentEmails.UpdatePermission)]
    [DeletePermission(PermissionKeys.SentEmails.DeletePermission)]
    [LookupScript("AdministrationTenants.SentEmails",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class SentEmailsRow : LoggingRow, IIdRow, INameRow
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
        [DisplayName("Email Signature"), NotMapped, ReadOnly(true), HtmlContentEditor, CssClass("email-signature-read")]
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

        public class RowFields : LoggingRowFields
        {
            public Int64Field SentEmailId;
            public StringField FromEmail;
            public StringField FromName;
            public StringField Subject;
            public StringField Body;
            public StringField ToEmail;
            public StringField ToName;
            public StringField EmailSignature;
            
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.SentEmails";
            }
        }


    }
}
