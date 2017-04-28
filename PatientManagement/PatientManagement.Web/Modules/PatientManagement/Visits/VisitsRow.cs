
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Visits]"), DisplayName("Visits"), InstanceName("Visits"), TwoLevelCached]
    [ReadPermission("PatientManagement:Visits:Read")]
    [ModifyPermission("PatientManagement:Visits:Modify")]
    public sealed class VisitsRow : Row, IIdRow, IInsertLogRow
    {
        [DisplayName("Visit Id"), Identity]
        public Int32? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [DisplayName("Visit Info Id")]
        public Int32? VisitInfoId
        {
            get { return Fields.VisitInfoId[this]; }
            set { Fields.VisitInfoId[this] = value; }
        }

        [DisplayName("Visit Type"), NotNull, ForeignKey("[dbo].[VisitTypes]", "VisitTypeId"), LeftJoin("jVisitType"), TextualField("VisitTypeName")]
        public Int32? VisitTypeId
        {
            get { return Fields.VisitTypeId[this]; }
            set { Fields.VisitTypeId[this] = value; }
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
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

        [DisplayName("Visit Type Name"), Expression("jVisitType.[Name]")]
        public String VisitTypeName
        {
            get { return Fields.VisitTypeName[this]; }
            set { Fields.VisitTypeName[this] = value; }
        }

        [DisplayName("Visit Type Insert User Id"), Expression("jVisitType.[InsertUserId]")]
        public Int32? VisitTypeInsertUserId
        {
            get { return Fields.VisitTypeInsertUserId[this]; }
            set { Fields.VisitTypeInsertUserId[this] = value; }
        }

        [DisplayName("Visit Type Insert Date"), Expression("jVisitType.[InsertDate]")]
        public DateTime? VisitTypeInsertDate
        {
            get { return Fields.VisitTypeInsertDate[this]; }
            set { Fields.VisitTypeInsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VisitId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VisitsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VisitId;
            public Int32Field PatientId;
            public Int32Field VisitInfoId;
            public Int32Field VisitTypeId;
            public DateTimeField Date;
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

            public StringField VisitTypeName;
            public Int32Field VisitTypeInsertUserId;
            public DateTimeField VisitTypeInsertDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Visits";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
    }
}
