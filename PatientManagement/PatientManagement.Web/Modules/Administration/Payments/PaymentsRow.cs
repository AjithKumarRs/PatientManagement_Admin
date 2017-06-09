
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

    [ConnectionKey("Default"), TableName("[dbo].[Payments]"), DisplayName("Payments"), InstanceName("Payments"), TwoLevelCached]
    [ReadPermission("AdministrationTenants:Payments")]
    [ModifyPermission("AdministrationTenants:Payments")]
    [LookupScript("AdministrationTenants.Payment",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PaymentsRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow
    {
        [DisplayName("Payment Id"), Identity]
        public Int64? PaymentId
        {
            get { return Fields.PaymentId[this]; }
            set { Fields.PaymentId[this] = value; }
        }

        [DisplayName("Subscription"), NotNull, ForeignKey("[dbo].[Subscriptions]", "SubscriptionId"), LeftJoin("jSubscription")]
        [LookupEditor(typeof(SubscriptionsRow))]
        public Int64? SubscriptionId
        {
            get { return Fields.SubscriptionId[this]; }
            set { Fields.SubscriptionId[this] = value; }
        }


        [DisplayName("Payment Details"), NotNull, ForeignKey("[dbo].[PaymentsDetails]", "PaymentDetailsId"), LeftJoin("jPaymentDetails"), TextualField("PaymentDetailsBeneficiaryName")]
        [LookupEditor(typeof(PaymentsDetailsRow))]
        public Int64? PaymentDetailsId
        {
            get { return Fields.PaymentDetailsId[this]; }
            set { Fields.PaymentDetailsId[this] = value; }
        }

        [DisplayName("Payment Option"), NotNull, ForeignKey("[dbo].[PaymentOptions]", "PaymentOptionId"), LeftJoin("jPaymentOption"), TextualField("PaymentOptionName")]
        [LookupEditor(typeof(PaymentOptionsRow))]
        public Int32? PaymentOptionId
        {
            get { return Fields.PaymentOptionId[this]; }
            set { Fields.PaymentOptionId[this] = value; }
        }

        [DisplayName("Currency"), NotNull,ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyId")]
        [LookupEditor(typeof(CurrenciesRow))]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Value"), Size(8), Scale(4), NotNull]
        public Decimal? Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("Role Before"), Size(200),  QuickSearch]
        public String RoleBefore
        {
            get { return Fields.RoleBefore[this]; }
            set { Fields.RoleBefore[this] = value; }
        }

        [DisplayName("Role After"), Size(200)]
        public String RoleAfter
        {
            get { return Fields.RoleAfter[this]; }
            set { Fields.RoleAfter[this] = value; }
        }

        [DisplayName("Payment Status")]
        public Int32? PaymentStatus
        {
            get { return Fields.PaymentStatus[this]; }
            set { Fields.PaymentStatus[this] = value; }
        }
        
        [DisplayName("Subscription Offer Id"), Expression("jSubscription.[OfferId]")]
        public Int32? SubscriptionOfferId
        {
            get { return Fields.SubscriptionOfferId[this]; }
            set { Fields.SubscriptionOfferId[this] = value; }
        }
        
        [DisplayName("Subscription Subscription End Date"), Expression("jSubscription.[SubscriptionEndDate]")]
        public DateTime? SubscriptionSubscriptionEndDate
        {
            get { return Fields.SubscriptionSubscriptionEndDate[this]; }
            set { Fields.SubscriptionSubscriptionEndDate[this] = value; }
        }
        
        [DisplayName("Payment Details Beneficiary Name"), Expression("jPaymentDetails.[BeneficiaryName]")]
        public String PaymentDetailsBeneficiaryName
        {
            get { return Fields.PaymentDetailsBeneficiaryName[this]; }
            set { Fields.PaymentDetailsBeneficiaryName[this] = value; }
        }

        [DisplayName("Payment Details Bank Name"), Expression("jPaymentDetails.[BankName]")]
        public String PaymentDetailsBankName
        {
            get { return Fields.PaymentDetailsBankName[this]; }
            set { Fields.PaymentDetailsBankName[this] = value; }
        }

        [DisplayName("Payment Details Iban Beneficient"), Expression("jPaymentDetails.[IBANBeneficient]")]
        public String PaymentDetailsIbanBeneficient
        {
            get { return Fields.PaymentDetailsIbanBeneficient[this]; }
            set { Fields.PaymentDetailsIbanBeneficient[this] = value; }
        }
        
        [DisplayName("Payment Option Days"), Expression("jPaymentOption.[Days]")]
        public Int32? PaymentOptionDays
        {
            get { return Fields.PaymentOptionDays[this]; }
            set { Fields.PaymentOptionDays[this] = value; }
        }

        [DisplayName("Payment Option Name"), Expression("jPaymentOption.[Name]")]
        public String PaymentOptionName
        {
            get { return Fields.PaymentOptionName[this]; }
            set { Fields.PaymentOptionName[this] = value; }
        }
        

        [DisplayName("Currency Currency Id"), Expression("jCurrency.[CurrencyId]")]
        public String CurrencyCurrencyId
        {
            get { return Fields.CurrencyCurrencyId[this]; }
            set { Fields.CurrencyCurrencyId[this] = value; }
        }

        [DisplayName("Currency Name"), Expression("jCurrency.[Name]")]
        public String CurrencyName
        {
            get { return Fields.CurrencyName[this]; }
            set { Fields.CurrencyName[this] = value; }
        }

        [DisplayName("Currency Rate"), Expression("jCurrency.[Rate]")]
        public Decimal? CurrencyRate
        {
            get { return Fields.CurrencyRate[this]; }
            set { Fields.CurrencyRate[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoleBefore; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PaymentId;
            public Int64Field SubscriptionId;
            public Int32Field TenantId;
            public Int64Field PaymentDetailsId;
            public Int32Field PaymentOptionId;
            public Int32Field CurrencyId;
            public DecimalField Value;
            public StringField RoleBefore;
            public StringField RoleAfter;
            public Int32Field PaymentStatus;

            public Int32Field SubscriptionOfferId;
            public DateTimeField SubscriptionSubscriptionEndDate;

            public StringField PaymentDetailsBeneficiaryName;
            public StringField PaymentDetailsBankName;
            public StringField PaymentDetailsIbanBeneficient;

            public Int32Field PaymentOptionDays;
            public StringField PaymentOptionName;

            public StringField CurrencyCurrencyId;
            public StringField CurrencyName;
            public DecimalField CurrencyRate;


            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;


            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Payments";
            }
        }
    }
}
