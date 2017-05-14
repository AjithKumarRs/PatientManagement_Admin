
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Activity]"), DisplayName("Activity"), InstanceName("Activity"), TwoLevelCached]
    [ReadPermission("PatientManagement:Activity")]
    [ModifyPermission("PatientManagement:Activity")]
    [LookupScript("PatientManagement.LifeStyles")]
    public sealed class ActivityRow : Row, IIdRow, INameRow, IInsertLogRow
    {
        [Category("General")]

        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [DisplayName("Movement And Training"), Size(2000), QuickSearch]
        [TextAreaEditor(Rows = 6)]
        public String MovementAndTraining
        {
            get { return Fields.MovementAndTraining[this]; }
            set { Fields.MovementAndTraining[this] = value; }
        }

        [DisplayName("Profession"), Size(200)]
        [TextAreaEditor(Rows = 6)]
        public String Profession
        {
            get { return Fields.Profession[this]; }
            set { Fields.Profession[this] = value; }
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
            get { return Fields.MovementAndTraining; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ActivityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField MovementAndTraining;
            public StringField Profession;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Activity";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
    }
}
