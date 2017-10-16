
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Tenants]"), DisplayName("Tenant"), InstanceName("Tenant"), TwoLevelCached]
    [ReadPermission("Administration:Tenants:Read")]
    [ModifyPermission("Administration:Tenants:Modify")]
    [LookupScript("Administration.Tenant")]
    public sealed class TenantRow : Row, IIdRow, INameRow, ILoggingRow , IIsActiveDeletedRow
    {
        [DisplayName("Tenant Id"), Identity]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch]
        [LookupInclude]
        [Unique]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        [DisplayName("Tenant Web Site"), Size(200), QuickSearch]
        public String TenantWebSite
        {
            get { return Fields.TenantWebSite[this]; }
            set { Fields.TenantWebSite[this] = value; }
        }

        [DisplayName("Tenant Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "TenantImage/~", CopyToHistory = true)]
        public String TenantImage
        {
            get { return Fields.TenantImage[this]; }
            set { Fields.TenantImage[this] = value; }
        }


        [DisplayName("Override Users Email Signature")]
        [BsSwitchEditor]
        public Boolean? OverrideUsersEmailSignature
        {
            get { return Fields.OverrideUsersEmailSignature[this]; }
            set { Fields.OverrideUsersEmailSignature[this] = value; }
        }

        [DisplayName("Tenant Email Signature"), Size(-1), HtmlContentEditor, CssClass("email-signature")]
        public String TenantEmailSignature
        {
            get { return Fields.TenantEmailSignature[this]; }
            set { Fields.TenantEmailSignature[this] = value; }
        }

        [DisplayName("Base Currency"), ForeignKey("Currencies", "Id"), LeftJoin("crnc"), Required]
        [LookupEditor(typeof(CurrenciesRow))]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Base Currency"), Expression("crnc.Name")]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }



        #region Subscription

        [DisplayName("Subscription Required"), NotNull, BsSwitchEditor]
        public Boolean? SubscriptionRequired
        {
            get { return Fields.SubscriptionRequired[this]; }
            set { Fields.SubscriptionRequired[this] = value; }
        }

        [DisplayName("Subscription"), ForeignKey("[dbo].[Subscriptions]", "SubscriptionId"), LeftJoin("jSubscription")]
        [LookupEditor(typeof(SubscriptionsRow), InplaceAdd = true)]
        public Int64? SubscriptionId
        {
            get { return Fields.SubscriptionId[this]; }
            set { Fields.SubscriptionId[this] = value; }
        }

        [DisplayName("Subscription Name"), Expression("jSubscription.[Name]")]

        public String SubscriptionName
        {
            get { return Fields.SubscriptionName[this]; }
            set { Fields.SubscriptionName[this] = value; }
        }

        [DisplayName("Subscription Offer Id"), Expression("jSubscription.[OfferId]")]
        public Int32? SubscriptionOfferId
        {
            get { return Fields.SubscriptionOfferId[this]; }
            set { Fields.SubscriptionOfferId[this] = value; }
        }

        [DisplayName("Subscription Tenant Id"), Expression("jSubscription.[TenantId]")]
        public Int32? SubscriptionTenantId
        {
            get { return Fields.SubscriptionTenantId[this]; }
            set { Fields.SubscriptionTenantId[this] = value; }
        }

        [DisplayName("Subscription Subscription End Date"), Expression("jSubscription.[SubscriptionEndDate]")]
        public DateTime? SubscriptionSubscriptionEndDate
        {
            get { return Fields.SubscriptionSubscriptionEndDate[this]; }
            set { Fields.SubscriptionSubscriptionEndDate[this] = value; }
        }

        [DisplayName("Subscription Insert User Id"), Expression("jSubscription.[InsertUserId]")]
        public Int32? SubscriptionInsertUserId
        {
            get { return Fields.SubscriptionInsertUserId[this]; }
            set { Fields.SubscriptionInsertUserId[this] = value; }
        }

        [DisplayName("Subscription Insert Date"), Expression("jSubscription.[InsertDate]")]
        public DateTime? SubscriptionInsertDate
        {
            get { return Fields.SubscriptionInsertDate[this]; }
            set { Fields.SubscriptionInsertDate[this] = value; }
        }

        [DisplayName("Subscription Update User Id"), Expression("jSubscription.[UpdateUserId]")]
        public Int32? SubscriptionUpdateUserId
        {
            get { return Fields.SubscriptionUpdateUserId[this]; }
            set { Fields.SubscriptionUpdateUserId[this] = value; }
        }

        [DisplayName("Subscription Update Date Field"), Expression("jSubscription.[UpdateDateField]")]
        public DateTime? SubscriptionUpdateDateField
        {
            get { return Fields.SubscriptionUpdateDateField[this]; }
            set { Fields.SubscriptionUpdateDateField[this] = value; }
        }

        #endregion

        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, QuickFilter()]
        [ReadPermission("Administration:Tenants")]
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


        #region IIsActive

        [DisplayName("Is Active"), NotNull]
        [ReadPermission(PermissionKeys.Tenants)]
        [LookupInclude]
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
            get { return Fields.TenantId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TenantName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TenantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TenantId;
            public StringField TenantName;
            public Int32Field CurrencyId;
            public StringField CurrencyName;
            public BooleanField SubscriptionRequired;
            public Int64Field SubscriptionId;

            public StringField TenantWebSite;
            public StringField TenantImage;
            public BooleanField OverrideUsersEmailSignature;
            public StringField TenantEmailSignature;

            public Int32Field SubscriptionOfferId;
            public Int32Field SubscriptionTenantId;
            public DateTimeField SubscriptionSubscriptionEndDate;
            public Int32Field SubscriptionInsertUserId;
            public DateTimeField SubscriptionInsertDate;
            public Int32Field SubscriptionUpdateUserId;
            public DateTimeField SubscriptionUpdateDateField;
            public StringField SubscriptionName;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public Int16Field IsActive;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Tenant";
            }
        }
    }
}
