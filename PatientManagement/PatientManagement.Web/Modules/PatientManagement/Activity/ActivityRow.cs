
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Activity]"), DisplayName("Activity"), InstanceName("Activity"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.Activity.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.Activity.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.Activity.DeletePermission)]
    [LookupScript("PatientManagement.Activity",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ActivityRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Activity Id"), Identity]
        public Int32?ActivityId
        {
            get { return Fields.ActivityId[this]; }
            set { Fields.ActivityId[this] = value; }
        }

        [DisplayName("Patient"), ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
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

        
        IIdField IIdRow.IdField
        {
            get { return Fields.ActivityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Profession; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ActivityRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ActivityId;
            public Int32Field PatientId;
            public StringField MovementAndTraining;
            public StringField Profession;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Activity";
            }
        }
        
    }
}
