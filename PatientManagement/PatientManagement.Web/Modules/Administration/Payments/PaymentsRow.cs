
using System.Collections.Generic;
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

        [Updatable(false)]
        [DisplayName("Customer Name"), NotNull, CssClass("linked-customer-name")]
        public string CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Customer IBAN"), NotNull, CssClass("linked-customer-CustomerIban")]
        public string CustomerIban
        {
            get { return Fields.CustomerIban[this]; }
            set { Fields.CustomerIban[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Customer Bank Name"), NotNull, CssClass("linked-customer-customerbank")]
        public string CustomerBankName
        {
            get { return Fields.CustomerBankName[this]; }
            set { Fields.CustomerBankName[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Reason For Payment"), NotNull]
        public string ReasonForPayment
        {
            get { return Fields.ReasonForPayment[this]; }
            set { Fields.ReasonForPayment[this] = value; }
        }
        [Updatable(false)]
        [DisplayName("Description")]
        public string Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Payment Type"), Size(500)]
        public string PaymentType
        {
            get { return Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Payment Currency"), Size(50)]
        public string PaymentCurrency
        {
            get { return Fields.PaymentCurrency[this]; }
            set { Fields.PaymentCurrency[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Months Payed")]
        public Int16? MonthsPayed
        {
            get { return Fields.MonthsPayed[this]; }
            set { Fields.MonthsPayed[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Receiver"), NotNull]
        public string Receiver
        {
            get { return Fields.Receiver[this]; }
            set { Fields.Receiver[this] = value; }
        }
        [Updatable(false)]
        [DisplayName("IBAN Receiver"), NotNull]
        public string IBANReceiver
        {
            get { return Fields.IBANReceiver[this]; }
            set { Fields.IBANReceiver[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("BIC Receiver"), NotNull]
        public string BICReceiver
        {
            get { return Fields.BICReceiver[this]; }
            set { Fields.BICReceiver[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Bank Name Receiver"), NotNull]
        public string BankNameReceiver
        {
            get { return Fields.BankNameReceiver[this]; }
            set { Fields.BankNameReceiver[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("Value"), NotNull]
        public Decimal? Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [Updatable(false)]
        [DisplayName("SubTotal"), NotNull]
        public Decimal? SubTotal
        {
            get { return Fields.SubTotal[this]; }
            set { Fields.SubTotal[this] = value; }
        }

        [DisplayName("Payment Status"), UpdatePermission("Administration:PaymentStatus")]
        public PaymentStatus? PaymentStatus
        {
            get { return (PaymentStatus?)Fields.PaymentStatus[this]; }
            set { Fields.PaymentStatus[this] = (Int32?)value; }
        }
        [DisplayName("Coupon Key"), Size(500)]
        public String CouponKey
        {
            get { return Fields.CouponKey[this]; }
            set { Fields.CouponKey[this] = value; }
        }

        [DisplayName("Coupon Discount")]
        public Int16? CouponDiscount
        {
            get { return Fields.CouponDiscount[this]; }
            set { Fields.CouponDiscount[this] = value; }
        }
        #region Coupons

        [DisplayName("Coupon")]
        [LookupEditor(typeof(CouponsRow),Multiple = true, FilterField = "IsActive", FilterValue = 1), NotMapped]
        [LinkingSetRelation(typeof(PaymentCouponsRow), "PaymentId", "CouponId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> CouponId
        {
            get
            {
                return Fields.CouponId[this];
            }
            set
            {
                Fields.CouponId[this] = value;
            }
        }


        #endregion

        #region Subscription
        [DisplayName("Subscription"), NotNull, ForeignKey("[dbo].[Subscriptions]", "SubscriptionId"), LeftJoin("jSubscription"), TextualField("SubscriptionName")]
        [LookupEditor(typeof(SubscriptionsRow), InplaceAdd = false, FilterField = "Enabled", FilterValue = 1)]
        [Updatable(false)]
        public Int64? SubscriptionId
        {
            get { return Fields.SubscriptionId[this]; }
            set { Fields.SubscriptionId[this] = value; }
        }

        [Updatable(false)]
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

        [DisplayName("Subscription Subscription End Date"), Expression("jSubscription.[SubscriptionEndDate]")]
        public DateTime? SubscriptionSubscriptionEndDate
        {
            get { return Fields.SubscriptionSubscriptionEndDate[this]; }
            set { Fields.SubscriptionSubscriptionEndDate[this] = value; }
        }


        #endregion

        #region PaymentDetails

        [DisplayName("Payment Details"), NotNull, ForeignKey("[dbo].[PaymentsDetails]", "PaymentDetailsId"), LeftJoin("jPaymentDetails"), TextualField("PaymentDetailName")]
        [Updatable(false)]
        [LookupEditor(typeof(PaymentsDetailsRow), InplaceAdd = true)]
        public Int64? PaymentDetailsId
        {
            get { return Fields.PaymentDetailsId[this]; }
            set { Fields.PaymentDetailsId[this] = value; }
        }

        [DisplayName("Payment Detail Name"), Expression("jPaymentDetails.[Name]")]
        public String PaymentDetailName
        {
            get { return Fields.PaymentDetailName[this]; }
            set { Fields.PaymentDetailName[this] = value; }
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


        #endregion

        #region PaymentOptions

        [DisplayName("Payment Option"), NotNull, ForeignKey("[dbo].[PaymentOptions]", "PaymentOptionId"), LeftJoin("jPaymentOption"), TextualField("PaymentOptionName")]
        [Updatable(false)]
        [LookupEditor(typeof(PaymentOptionsRow))]
        public Int32? PaymentOptionId
        {
            get { return Fields.PaymentOptionId[this]; }
            set { Fields.PaymentOptionId[this] = value; }
        }

        [DisplayName("Payment Option Months"), Expression("jPaymentOption.[Months]")]
        public Int32? PaymentOptionMonths
        {
            get { return Fields.PaymentOptionMonths[this]; }
            set { Fields.PaymentOptionMonths[this] = value; }
        }

        [DisplayName("Payment Option Name"), Expression("jPaymentOption.[Name]")]
        public String PaymentOptionName
        {
            get { return Fields.PaymentOptionName[this]; }
            set { Fields.PaymentOptionName[this] = value; }
        }


        #endregion

        #region Currency

        [DisplayName("Currency"), NotNull, ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyId")]
        [Updatable(false)]
        [LookupEditor(typeof(CurrenciesRow), FilterField = "Enabled", FilterValue = true)]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
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


        [DisplayName("Insert Date"), NotNull, SortOrder(1, true)]
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
        [ReadPermission(PermissionKeys.Tenants)]
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
            get { return Fields.SubscriptionName; }
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
            public DecimalField SubTotal;

            public StringField CustomerName;
            public StringField CustomerBankName;
            public StringField CustomerIban;
            public StringField ReasonForPayment;
            public StringField Description;
            public StringField Receiver;
            public StringField IBANReceiver;
            public StringField BICReceiver;
            public StringField BankNameReceiver;
            public Int32Field PaymentStatus;
            public Int16Field MonthsPayed;
            public StringField PaymentCurrency;
            public StringField PaymentType;

            public Int32Field SubscriptionOfferId;
            public DateTimeField SubscriptionSubscriptionEndDate;
            public StringField SubscriptionName;

            public StringField PaymentDetailName;
            public StringField PaymentDetailsBankName;
            public StringField PaymentDetailsIbanBeneficient;

            public Int32Field PaymentOptionMonths;
            public StringField PaymentOptionName;

            public ListField<Int32> CouponId;
            public StringField CouponKey;
            public Int16Field CouponDiscount;

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
