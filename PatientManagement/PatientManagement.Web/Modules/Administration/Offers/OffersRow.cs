
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
    [ReadPermission(PermissionKeys.Offers)]
    [ModifyPermission(PermissionKeys.Offers)]
    public sealed class OffersRow : Row, IIdRow, INameRow, IUpdateLogRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Maximum Days"), IntegerEditor]
        public Int32? MaximumSubscriptionTime
        {
            get { return Fields.MaximumSubscriptionTime[this]; }
            set { Fields.MaximumSubscriptionTime[this] = value; }
        }
        [DisplayName("Expiration Date"), DateTimeEditor]
        public DateTime? ExpirationDate
        {
            get { return Fields.ExpirationDate[this]; }
            set { Fields.ExpirationDate[this] = value; }
        }
        [DisplayName("Maximum Users"), IntegerEditor]
        public Int32? MaximumUsers
        {
            get { return Fields.MaximumUsers[this]; }
            set { Fields.MaximumUsers[this] = value; }
        }
        [DisplayName("Description"), Size(500), TextAreaEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Price"), Size(8), Scale(4), NotNull]
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
        [DisplayName("Currency"), NotNull, ForeignKey("[dbo].[Currencies]", "Id"), LeftJoin("jCurrency"), TextualField("CurrencyCurrencyId")]
        [LookupEditor(typeof(CurrenciesRow))]
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

        [DisplayName("Update Date Field"), NotNull]
        public DateTime? UpdateDateField
        {
            get { return Fields.UpdateDateField[this]; }
            set { Fields.UpdateDateField[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
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
            public Int32Field Id;
            public StringField Name;
            public Int32Field MaximumSubscriptionTime;
            public Int32Field MaximumUsers;
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
            public StringField RoleRoleName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Offers";
            }
        }
    }
}
