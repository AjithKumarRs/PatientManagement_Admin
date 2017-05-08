
using System.Collections.Generic;
using PatientManagement.PatientManagement.Scripts;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Patients]"), DisplayName("Patients"), InstanceName("Patient"), TwoLevelCached]
    [ReadPermission("PatientManagement:Patients:Read")]
    [ModifyPermission("PatientManagement:Patients:Modify")]
    [LookupScript("PatientManagement.Patients")]
    [LeftJoin("cd", "PatientHealth", "cd.[PatientId] = t0.[PatientId]", RowType = typeof(PatientHealthRow), TitlePrefix = "")]
    public sealed class PatientsRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow
    {
        [Category("Required Fields")]
        [DisplayName("Patient Id"), Identity]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }
     

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Personal Number"), Size(300), QuickSearch]
        public Int64? PersonalNumber
        {
            get { return Fields.PersonalNumber[this]; }
            set { Fields.PersonalNumber[this] = value; }
        }

        [DisplayName("Phone Number"), Size(50), NotNull, QuickSearch]
        public string PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Gender"), NotNull]
        public Gender? Gender
        {
            get { return (Gender?)Fields.Gender[this]; }
            set { Fields.Gender[this] = (Int32?)value; }
        }

        [Category("Additional Information")]
        [DisplayName("First Registration Date"), Size(200)]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]

        public DateTime? FirstRegistrationDate
        {
            get { return Fields.FirstRegistrationDate[this]; }
            set { Fields.FirstRegistrationDate[this] = value; }
        }

        [DisplayName("Address"), Size(200)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Height")]
        public Int32? Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }

        [DisplayName("Weight")]
        public Int32? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
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

        [NotesEditor, NotMapped]
        public List<NotesRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField Name;
            public Int64Field PersonalNumber;
            public StringField PhoneNumber;
            public Int32Field Gender;

            public DateTimeField FirstRegistrationDate;
            public StringField Address;
            public Int32Field Height;
            public Int32Field Weight;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public RowListField<NotesRow> NoteList;

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Patients";
            }
        }


        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

    }
}
