
using PatientManagement.PatientManagement;
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

    [ConnectionKey("Default"), TableName("[dbo].[PaymentsDetails]"), DisplayName("Payments Details"), InstanceName("Payments Details"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Payments.ReadPermission)]
    [ModifyPermission(PermissionKeys.Payments.ModifyPermission)]
    [LookupScript("Administration.PaymentsDetails", 
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PaymentsDetailsRow : LoggingRow, IIdRow, INameRow
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

        [DisplayName("Payment Types"), NotNull]
        public PaymentTypes? PaymentType
        {
            get { return (PaymentTypes?)Fields.PaymentType[this]; }
            set { Fields.PaymentType[this] = (Int32?)value; }
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

        

        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentDetailsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentsDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field PaymentDetailsId;
            public StringField BeneficiaryName;
            public StringField BankName;
            public StringField Name;
            public Int32Field PaymentType;

            public StringField IbanBeneficient;
            
            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.PaymentsDetails";
            }
        }
    }
}
