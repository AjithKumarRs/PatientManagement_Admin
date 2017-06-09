
namespace PatientManagement.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[PaymentsDetails]"), DisplayName("Payments Details"), InstanceName("Payments Details"), TwoLevelCached]
    [ReadPermission("AdministrationTenants:PaymentsDetails")]
    [ModifyPermission("AdministrationTenants:PaymentsDetails")]
    [LookupScript("Administration.PaymentsDetails")]
    public sealed class PaymentsDetailsRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow
    {
        [DisplayName("Payment Details Id"), Identity]
        public Int64? PaymentDetailsId
        {
            get { return Fields.PaymentDetailsId[this]; }
            set { Fields.PaymentDetailsId[this] = value; }
        }

        [DisplayName("Peyment Method Name"), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }


        [DisplayName("Beneficiary Name"), Size(500), NotNull, QuickSearch]
        public String BeneficiaryName
        {
            get { return Fields.BeneficiaryName[this]; }
            set { Fields.BeneficiaryName[this] = value; }
        }

        [DisplayName("Bank Name"), Size(500), NotNull]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Iban Beneficient"), Column("IBANBeneficient"), Size(500), NotNull]
        public String IbanBeneficient
        {
            get { return Fields.IbanBeneficient[this]; }
            set { Fields.IbanBeneficient[this] = value; }
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
            get { return Fields.PaymentDetailsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BeneficiaryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentsDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field PaymentDetailsId;
            public StringField BeneficiaryName;
            public StringField BankName;
            public StringField Name;
            public StringField IbanBeneficient;
            public Int32Field TenantId;
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
                LocalTextPrefix = "Administration.PaymentsDetails";
            }
        }
    }
}
