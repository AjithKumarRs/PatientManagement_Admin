
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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[PatientsFileUploads]"), DisplayName("Patients File Uploads"), InstanceName("Patients File Uploads"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.PatientsFileUploads.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.PatientsFileUploads.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.PatientsFileUploads.DeletePermission)]
    [LookupScript("PatientManagement.PatientsFileUploads",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LeftJoin("p", "Patients", "p.[PatientId] = t0.[PatientId]", RowType = typeof(PatientsRow), TitlePrefix = "")]
    public sealed class PatientsFileUploadsRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow
    {
        [DisplayName("Patient File Upload Id"), Identity]
        public Int32? PatientFileUploadId
        {
            get { return Fields.PatientFileUploadId[this]; }
            set { Fields.PatientFileUploadId[this] = value; }
        }
        
        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }

        [DisplayName("File Path"), NotNull, MultipleFileUploadEditor]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Description"), Size(2000), NotNull]
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
        IIdField IIdRow.IdField
        {
            get { return Fields.PatientFileUploadId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PatientName; }
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

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.PatientsFileUploads";
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
