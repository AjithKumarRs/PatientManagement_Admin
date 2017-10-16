
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
    [ReadPermission("AdministrationTenants:Subscriptions:Read")]
    [ModifyPermission("AdministrationTenants:Subscriptions:Modify")]
    [LookupScript("Administration.Subscriptions",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class SubscriptionsRow : Row, IIdRow, ILoggingRow, INameRow,  IMultiTenantRow, IIsActiveDeletedRow
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

        [DisplayName("Paid Period"), NotMapped, Insertable(false), Updatable(false)]
        public DateTime? PaidPeriod
        {
            get { return Fields.PaidPeriod[this]; }
            set { Fields.PaidPeriod[this] = value; }
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



        #region Tenant

        [DisplayName("Tenant"), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        [LookupEditor(typeof(TenantRow))]
        [ReadPermission(PermissionKeys.Tenants)]
        [ModifyPermission(PermissionKeys.Tenants)]
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


        [DisplayName("Insert Date"), NotNull]
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

        public class RowFields : RowFieldsBase
        {
            public Int64Field SubscriptionId;
            public StringField Name;
            public Int32Field OfferId;
            public Int32Field TenantId;
            public DateTimeField SubscriptionEndDate;
            public DateTimeField PaidPeriod;
            public Int16Field Enabled;

            public Int16Field IsActive;
            public DateTimeField DeactivatedOn;
            public DateTimeField ActivatedOn;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;

            public StringField OfferName;
            public StringField OfferDescription;
            public DecimalField OfferPrice;
            public Int32Field OfferRoleId;


            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Subscriptions";
            }
        }
    }
}
