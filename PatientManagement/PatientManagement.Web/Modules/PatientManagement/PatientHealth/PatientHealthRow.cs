
using PatientManagement.Administration;
using PatientManagement.Administration.Entities;
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
    [ReadPermission(PatientManagementPermissionKeys.PatientHealth.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.PatientHealth.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.PatientHealth.DeletePermission)]
    [LookupScript("PatientManagement.PatientHealth", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PatientHealthRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Patient Health Id"), Identity]
        public Int32? PatientHealthId
        {
            get { return Fields.PatientHealthId[this]; }
            set { Fields.PatientHealthId[this] = value; }
        }

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
        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }
        

        IIdField IIdRow.IdField
        {
            get { return Fields.PatientHealthId; }
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

        public class RowFields : LoggingRowFields
        {
            public Int32Field PatientHealthId;
            public Int32Field PatientId;
            public StringField Diseases;
            public StringField MedicinesIntake;

            public StringField PatientName;
            
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.PatientHealth";
            }
        }
      

    }
}
