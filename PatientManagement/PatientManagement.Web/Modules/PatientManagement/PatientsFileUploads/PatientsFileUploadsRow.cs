
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[PatientsFileUploads]"), DisplayName("Patients File Uploads"), InstanceName("Patients File Uploads"), TwoLevelCached]
    [ReadPermission("PatientManagement:PatientsFileUploads:Read")]
    [ModifyPermission("PatientManagement:PatientsFileUploads:Modify")]
    [LookupScript("PatientManagement.PatientsFileUploads")]
    [LeftJoin("p", "Patients", "p.[PatientId] = t0.[PatientId]", RowType = typeof(PatientsRow), TitlePrefix = "")]
    public sealed class PatientsFileUploadsRow : Row, IIdRow, INameRow, IInsertLogRow
    {
        [DisplayName("Patient File Upload Id"), Identity]
        public Int32? PatientFileUploadId
        {
            get { return Fields.PatientFileUploadId[this]; }
            set { Fields.PatientFileUploadId[this] = value; }
        }
        [Category("General")]
        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [Category("Attachments")]
        [DisplayName("File Path"), NotNull, MultipleFileUploadEditor]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Description"), Size(100), NotNull]
        [TextAreaEditor(Rows = 3)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull, SortOrder(1)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }

        [DisplayName("Patient Personal Number"), Expression("jPatient.[PersonalNumber]")]
        public Int32? PatientPersonalNumber
        {
            get { return Fields.PatientPersonalNumber[this]; }
            set { Fields.PatientPersonalNumber[this] = value; }
        }

        [DisplayName("Patient Phone Number"), Expression("jPatient.[PhoneNumber]")]
        public Int32? PatientPhoneNumber
        {
            get { return Fields.PatientPhoneNumber[this]; }
            set { Fields.PatientPhoneNumber[this] = value; }
        }

        [DisplayName("Patient First Registration Date"), Expression("jPatient.[FirstRegistrationDate]")]
        public DateTime? PatientFirstRegistrationDate
        {
            get { return Fields.PatientFirstRegistrationDate[this]; }
            set { Fields.PatientFirstRegistrationDate[this] = value; }
        }

        [DisplayName("Patient Address"), Expression("jPatient.[Address]")]
        public String PatientAddress
        {
            get { return Fields.PatientAddress[this]; }
            set { Fields.PatientAddress[this] = value; }
        }

        [DisplayName("Patient Height"), Expression("jPatient.[Height]")]
        public Int32? PatientHeight
        {
            get { return Fields.PatientHeight[this]; }
            set { Fields.PatientHeight[this] = value; }
        }

        [DisplayName("Patient Weight"), Expression("jPatient.[Weight]")]
        public Int32? PatientWeight
        {
            get { return Fields.PatientWeight[this]; }
            set { Fields.PatientWeight[this] = value; }
        }

        [DisplayName("Patient Insert User Id"), Expression("jPatient.[InsertUserId]")]
        public Int32? PatientInsertUserId
        {
            get { return Fields.PatientInsertUserId[this]; }
            set { Fields.PatientInsertUserId[this] = value; }
        }

        [DisplayName("Patient Insert Date"), Expression("jPatient.[InsertDate]")]
        public DateTime? PatientInsertDate
        {
            get { return Fields.PatientInsertDate[this]; }
            set { Fields.PatientInsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientFileUploadId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FilePath; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientsFileUploadsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientFileUploadId;
            public Int32Field PatientId;
            public StringField FilePath;
            public StringField Description;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public StringField PatientName;
            public Int32Field PatientPersonalNumber;
            public Int32Field PatientPhoneNumber;
            public DateTimeField PatientFirstRegistrationDate;
            public StringField PatientAddress;
            public Int32Field PatientHeight;
            public Int32Field PatientWeight;
            public Int32Field PatientInsertUserId;
            public DateTimeField PatientInsertDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.PatientsFileUploads";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
    }
}
