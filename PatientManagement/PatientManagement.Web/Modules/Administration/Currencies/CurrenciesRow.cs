
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Currencies]"), DisplayName("Currencies"), InstanceName("Currencies"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Currencies)]
    [ModifyPermission(PermissionKeys.Currencies)]
    [LookupScript("Administration.Currencies")]
    public sealed class CurrenciesRow : Row, IIdRow, INameRow, IUpdateLogRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Currency Id"), Size(3), NotNull, QuickSearch]
        public String CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Name"), Size(50)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        [DisplayName("Enabled"), BsSwitchEditor, NotNull]
        public Boolean? Enabled
        {
            get { return Fields.Enabled[this]; }
            set { Fields.Enabled[this] = value; }
        }

        [DisplayName("Rate"), Size(8), Scale(4), NotNull]
        public Decimal? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        [DisplayName("Base Currency"), ForeignKey("Currencies", "Id"), LeftJoin("crnc"), TextualField("BaseCategoryName")]
        [LookupEditor(typeof(CurrenciesRow))]
        public Int32? BaseCurrencyId
        {
            get { return Fields.BaseCurrencyId[this]; }
            set { Fields.BaseCurrencyId[this] = value; }
        }
        [DisplayName("Base Currency"), Expression("crnc.[Name]")]
        public String BaseCurrencyName
        {
            get { return Fields.BaseCurrencyName[this]; }
            set { Fields.BaseCurrencyName[this] = value; }
        }
        [DisplayName("Update User Id"), NotNull,ForeignKey("Users", "UserId"), LeftJoin("usr")]
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
            get { return Fields.CurrencyId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrenciesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CurrencyId;
            public StringField Name;
            public DecimalField Rate;
            public BooleanField Enabled;
            public Int32Field BaseCurrencyId;
            public StringField BaseCurrencyName;
            public Int32Field UpdateUserId;
            public StringField UserName;
            public DateTimeField UpdateDateField;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Currencies";
            }
        }
    }
}
