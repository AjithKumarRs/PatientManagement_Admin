
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[PatientHealth]"), DisplayName("Patient Health"), InstanceName("Patient Health"), TwoLevelCached]
    [ReadPermission("PatientManagement:PatientHealth:Read")]
    [ModifyPermission("PatientManagement:PatientHealth:Modify")]
    [LookupScript("PatientManagement.PatientHealth", LookupType = typeof(MultiTenantRowLookupScript<>))]

    public sealed class PatientHealthRow : Row, IIdRow, INameRow , IInsertLogRow, IMultiTenantRow
    {
        [Category("General")]

        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }
        

        [DisplayName("Diseases"), Size(2000)]
        [TextAreaEditor(Rows = 8)]
        public String Diseases
        {
            get { return Fields.Diseases[this]; }
            set { Fields.Diseases[this] = value; }
        }

        [DisplayName("Medicines Intake"), Size(2000)]
        [TextAreaEditor(Rows = 8)]
        public String MedicinesIntake
        {
            get { return Fields.MedicinesIntake[this]; }
            set { Fields.MedicinesIntake[this] = value; }
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
            set { Fields.InsertDate[this] = DateTime.Now; }
        }

        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.PatientId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Diseases; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientHealthRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            public StringField Diseases;
            public StringField MedicinesIntake;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public StringField PatientName;

            public readonly Int32Field TenantId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.PatientHealth";
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
