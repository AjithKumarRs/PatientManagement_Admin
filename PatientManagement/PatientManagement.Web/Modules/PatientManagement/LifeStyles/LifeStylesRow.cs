
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[LifeStyles]"), DisplayName("Life Styles"), InstanceName("Life Style"), TwoLevelCached]
    [ReadPermission("PatientManagement:LifeStyles:Read")]
    [ModifyPermission("PatientManagement:LifeStyles:Modify")]
    [LookupScript("PatientManagement.LifeStyles")]
    public sealed class LifeStylesRow : Row, IIdRow, INameRow, IInsertLogRow
    {
        [Category("General")]

        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName"), Required(true)]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]

        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [DisplayName("Job"), Size(500), QuickSearch]
        [TextAreaEditor(Rows = 6)]
        public String Job
        {
            get { return Fields.Job[this]; }
            set { Fields.Job[this] = value; }
        }

        [DisplayName("Movement"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String Movement
        {
            get { return Fields.Movement[this]; }
            set { Fields.Movement[this] = value; }
        }

        [DisplayName("Training"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String Training
        {
            get { return Fields.Training[this]; }
            set { Fields.Training[this] = value; }
        }

        [DisplayName("Bad Habits"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String BadHabits
        {
            get { return Fields.BadHabits[this]; }
            set { Fields.BadHabits[this] = value; }
        }

        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }


        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]

        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
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

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.LifeStyles";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
    }
}
