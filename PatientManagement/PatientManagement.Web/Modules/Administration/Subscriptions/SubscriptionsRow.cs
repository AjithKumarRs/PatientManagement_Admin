
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

    [ConnectionKey("Default"), TableName("[dbo].[Subscriptions]"), DisplayName("Subscriptions"), InstanceName("Subscriptions"), TwoLevelCached]
    [ReadPermission(AdministrationTenantsPermissionKeys.Subscriptions.ReadPermission)]
    [ModifyPermission(AdministrationTenantsPermissionKeys.Subscriptions.ModifyPermission)]
    [LookupScript("Administration.Subscriptions",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class SubscriptionsRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Subscription Id"), Identity]
        public Int64? SubscriptionId
        {
            get { return Fields.SubscriptionId[this]; }
            set { Fields.SubscriptionId[this] = value; }
        }

        [DisplayName("Offer"), NotNull, ForeignKey("[dbo].[Offers]", "OfferId"), LeftJoin("jOffer"), TextualField("OfferName"), Updatable(false)]
        [LookupEditor(typeof(OffersRow))]
        public Int32? OfferId
        {
            get { return Fields.OfferId[this]; }
            set { Fields.OfferId[this] = value; }
        }
        
        [DisplayName("Subscription End Date")]
        public DateTime? SubscriptionEndDate
        {
            get { return Fields.SubscriptionEndDate[this]; }
            set { Fields.SubscriptionEndDate[this] = value; }
        }

        [DisplayName("Activated On"), NotNull]
        public DateTime? ActivatedOn
        {
            get { return Fields.ActivatedOn[this]; }
            set { Fields.ActivatedOn[this] = value; }
        }

        [DisplayName("Deactivated On"), NotNull]
        public DateTime? DeactivatedOn
        {
            get { return Fields.DeactivatedOn[this]; }
            set { Fields.DeactivatedOn[this] = value; }
        }
        [DisplayName("Subscription Name"), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }



        [DisplayName("Free Days From Offer")]
        [ReadPermission(PermissionKeys.Tenant)]
        [ModifyPermission(PermissionKeys.Tenant)]
        public Int32? FreeDaysFromOffer
        {
            get { return Fields.FreeDaysFromOffer[this]; }
            set { Fields.FreeDaysFromOffer[this] = value; }
        }

        [DisplayName("Offer Name"), Expression("jOffer.[Name]")]
        public String OfferName
        {
            get { return Fields.OfferName[this]; }
            set { Fields.OfferName[this] = value; }
        }

        

        [DisplayName("Offer Description"), Expression("jOffer.[Description]")]
        public String OfferDescription
        {
            get { return Fields.OfferDescription[this]; }
            set { Fields.OfferDescription[this] = value; }
        }

        [DisplayName("Offer Price"), Expression("jOffer.[Price]")]
        public Decimal? OfferPrice
        {
            get { return Fields.OfferPrice[this]; }
            set { Fields.OfferPrice[this] = value; }
        }


        [DisplayName("Offer Role Id"), Expression("jOffer.[RoleId]")]
        public Int32? OfferRoleId
        {
            get { return Fields.OfferRoleId[this]; }
            set { Fields.OfferRoleId[this] = value; }
        }


        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.SubscriptionId; }
        }
        
        [NotNull, DisplayName("Is Active"),  SortOrder(1, true)]
        [BsSwitchEditor]
        [LookupInclude]
        public Int16? Enabled
        {
            get { return Fields.Enabled[this]; }
            set { Fields.Enabled[this] = value; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SubscriptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field SubscriptionId;
            public StringField Name;
            public Int32Field OfferId;
            public DateTimeField SubscriptionEndDate;
            public Int16Field Enabled;
            public Int32Field FreeDaysFromOffer;
            
            public DateTimeField DeactivatedOn;
            public DateTimeField ActivatedOn;

            public StringField OfferName;
            public StringField OfferDescription;
            public DecimalField OfferPrice;
            public Int32Field OfferRoleId;


            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Subscriptions";
            }
        }
    }
}
