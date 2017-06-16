
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
    public sealed class TenantRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
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

            public Int32Field SubscriptionOfferId;
            public Int32Field SubscriptionTenantId;
            public DateTimeField SubscriptionSubscriptionEndDate;
            public Int32Field SubscriptionInsertUserId;
            public DateTimeField SubscriptionInsertDate;
            public Int32Field SubscriptionUpdateUserId;
            public DateTimeField SubscriptionUpdateDateField;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Tenant";
            }
        }
    }
}
