
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[LifeStyles]"), DisplayName("Life Styles"), InstanceName("Life Styles"), TwoLevelCached]
    [ReadPermission("PatientManagement:LifeStyles:Read")]
    [ModifyPermission("PatientManagement:LifeStyles:Modify")]
    public sealed class LifeStylesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [DisplayName("Job"), Size(500), QuickSearch]
        public String Job
        {
            get { return Fields.Job[this]; }
            set { Fields.Job[this] = value; }
        }

        [DisplayName("Movement"), Size(500)]
        public String Movement
        {
            get { return Fields.Movement[this]; }
            set { Fields.Movement[this] = value; }
        }

        [DisplayName("Training"), Size(500)]
        public String Training
        {
            get { return Fields.Training[this]; }
            set { Fields.Training[this] = value; }
        }

        [DisplayName("Bad Habits"), Size(500)]
        public String BadHabits
        {
            get { return Fields.BadHabits[this]; }
            set { Fields.BadHabits[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Job; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LifeStylesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField Job;
            public StringField Movement;
            public StringField Training;
            public StringField BadHabits;
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
                LocalTextPrefix = "PatientManagement.LifeStyles";
            }
        }
    }
}
