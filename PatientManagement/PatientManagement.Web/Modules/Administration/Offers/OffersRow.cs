
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Offers]"), DisplayName("Offers"), InstanceName("Offers"), TwoLevelCached]
    [ReadPermission("AdministrationTenants:Offers:Read")]
    [ModifyPermission("Administration:Offers:Modify")]
    [LookupScript("Administration.Offers")]
    [LocalizationRow(typeof(OfferLangRow))]
    public sealed class OffersRow : Row, IIdRow, INameRow, IUpdateLogRow
    {
        [DisplayName("OfferId"), Identity]
        public Int32? OfferId
        {
            get { return Fields.OfferId[this]; }
            set { Fields.OfferId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(500), TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Price per month"), Size(8), Scale(4), NotNull]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Enabled"), BsSwitchEditor, NotNull]
        public Boolean? Enabled
        {
            get { return Fields.Enabled[this]; }
            set { Fields.Enabled[this] = value; }
        }

        
        [DisplayName("Maximum Using Days"), IntegerEditor]
        public Int32? MaximumSubscriptionTime
        {
            get { return Fields.MaximumSubscriptionTime[this]; }
            set { Fields.MaximumSubscriptionTime[this] = value; }
        }

        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Expiration Date"), DateTimeEditor]
        public DateTime? ExpirationDate
        {
            get { return Fields.ExpirationDate[this]; }
            set { Fields.ExpirationDate[this] = value; }
        }
        [DisplayName("Maximum Users Per Tenant"), IntegerEditor]
        public Int32? MaximumUsersPerTenant
        {
            get { return Fields.MaximumUsersPerTenant[this]; }
            set { Fields.MaximumUsersPerTenant[this] = value; }
        }

        [DisplayName("Maximum Visits Per Tenant"), IntegerEditor]
        public Int32? MaximumVisitsPerTenant
        {
            get { return Fields.MaximumVisitsPerTenant[this]; }
            set { Fields.MaximumVisitsPerTenant[this] = value; }
        }

        [DisplayName("Maximum Patients Per Tenant"), IntegerEditor]
        public Int32? MaximumPatientsPerTenant
        {
            get { return Fields.MaximumPatientsPerTenant[this]; }
            set { Fields.MaximumPatientsPerTenant[this] = value; }
        }

        [DisplayName("Maximum Cabinets"), IntegerEditor]
        public Int32? MaximumCabinets
        {
            get { return Fields.MaximumCabinets[this]; }
            set { Fields.MaximumCabinets[this] = value; }
        }
        [DisplayName("Currency"), NotNull, ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyId")]
        [LookupEditor(typeof(CurrenciesRow), InplaceAdd = true, FilterField = "Enabled", FilterValue = true)]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Role"), NotNull, ForeignKey("[dbo].[Roles]", "RoleId"), LeftJoin("jRole"), TextualField("RoleRoleName")]
        [LookupEditor(typeof(RoleRow))]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Currency Code"), Expression("jCurrency.[CurrencyId]")]
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
        [DisplayName("Currency Enabled"), Expression("jCurrency.[Enabled]")]
        public Boolean? CurrencyEnabled
        {
            get { return Fields.CurrencyEnabled[this]; }
            set { Fields.CurrencyEnabled[this] = value; }
        }

        [DisplayName("Role Name"), Expression("jRole.[RoleName]")]
        public String RoleRoleName
        {
            get { return Fields.RoleRoleName[this]; }
            set { Fields.RoleRoleName[this] = value; }
        }
        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usr")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Last updated by"), Expression("usr.UserName")]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        public IIdField UpdateUserIdField
        {
            get { return Fields.UpdateUserId; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return Fields.UpdateDateField; }
        }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Update Date Field"), NotNull]
        public DateTime? UpdateDateField
        {
            get { return Fields.UpdateDateField[this]; }
            set { Fields.UpdateDateField[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OfferId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OffersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OfferId;
            public StringField Name;
            public Int32Field MaximumSubscriptionTime;
            public Int32Field MaximumUsersPerTenant;
            public Int32Field MaximumVisitsPerTenant;
            public Int32Field MaximumPatientsPerTenant;
            public Int32Field MaximumCabinets;

            public DateTimeField ExpirationDate;
            public StringField Description;
            public DecimalField Price;
            public BooleanField Enabled;

            public Int32Field CurrencyId;
            public Int32Field RoleId;
            public Int32Field UpdateUserId;
            public StringField UserName;
            public DateTimeField UpdateDateField;

            public StringField CurrencyCurrencyId;
            public StringField CurrencyName;
            public BooleanField CurrencyEnabled;

            public StringField RoleRoleName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Offers";
            }
        }
    }
}
