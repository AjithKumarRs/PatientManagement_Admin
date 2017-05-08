
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[Visits]"), DisplayName("Visits"), InstanceName("Visit"), TwoLevelCached]
    [ReadPermission("PatientManagement:Visits:Read")]
    [ModifyPermission("PatientManagement:Visits:Modify")]
    [LeftJoin("p", "Patients", "p.[PatientId] = t0.[PatientId]", RowType = typeof(PatientsRow), TitlePrefix = "")]
    [LookupScript("PatientManagement.Visits")]

    public sealed class VisitsRow : Row, IIdRow, IInsertLogRow, IMultiTenantRow
    {
        [DisplayName("Visit Id"), Identity, QuickSearch]
        public Int32? VisitId
        {
            get => Fields.VisitId[this];
            set => Fields.VisitId[this] = value;
        }
        [Category("Properties")]
        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]
        public Int32? PatientId
        {
            get => Fields.PatientId[this];
            set => Fields.PatientId[this] = value;
        }
        

        [DisplayName("Visit Type"), NotNull, ForeignKey("[dbo].[VisitTypes]", "VisitTypeId"), LeftJoin("jVisitType"), TextualField("VisitTypeName")]
        [LookupEditor(typeof(VisitTypesRow), InplaceAdd = true)]
        public Int32? VisitTypeId
        {
            get => Fields.VisitTypeId[this];
            set => Fields.VisitTypeId[this] = value;
        }


        [Expression("jVisitType.[BackgroundColor]")]
        public String VisitTypeBackgroundColor
        {
            get { return Fields.VisitTypeBackgroundColor[this]; }
            set { Fields.VisitTypeBackgroundColor[this] = value; }
        }

        [Expression("jVisitType.[BorderColor]")]
        public String VisitTypeBorderColor
        {
            get { return Fields.VisitTypeBorderColor[this]; }
            set { Fields.VisitTypeBorderColor[this] = value; }
        }

        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("Start Date"), NotNull, QuickSearch, QuickFilter, SortOrder(1, true), Width(150)]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? StartDate
        {
            get => Fields.StartDate[this];
            set => Fields.StartDate[this] = value;
        }
        [DisplayFormat("dd/MM/yyyy HH:mm")]
        [DisplayName("End Date"), NotNull, QuickSearch, Width(150)]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? EndDate
        {
            get => Fields.EndDate[this];
            set => Fields.EndDate[this] = value;
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get => Fields.InsertUserId[this];
            set => Fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get => Fields.InsertDate[this];
            set => Fields.InsertDate[this] = value;
        }

        [Category("Extra Info")]
        [DisplayName("Description"), Width(150)]
        [TextAreaEditor(Rows = 8)]
        public String Description
        {
            get => Fields.Description[this];
            set => Fields.Description[this] = value;
        }

        #region PatientFields
        [DisplayName("Patient Name"), Expression("jPatient.[Name]"), Width(150), EditLink, QuickSearch ]
        public String PatientName
        {
            get => Fields.PatientName[this];
            set => Fields.PatientName[this] = value;
        }

        [DisplayName("Phone Number"), Expression("jPatient.[PhoneNumber]"), QuickSearch]
        public string PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }
        [Expression("jPatient.[Gender]")]
        public Gender? PatientGender
        {
            get { return (Gender?)Fields.PatientGender[this]; }
            set { Fields.PatientGender[this] = (Int32?)value; }
        }
        #endregion


        [DisplayName("Visit Type Name"), Expression("jVisitType.[Name]"), Width(150), QuickFilter]
        public String VisitTypeName
        {
            get => Fields.VisitTypeName[this];
            set => Fields.VisitTypeName[this] = value;
        }

        IIdField IIdRow.IdField => Fields.VisitId;

        public static readonly RowFields Fields = new RowFields().Init();

        public VisitsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VisitId;
            public Int32Field PatientId;
            public Int32Field VisitTypeId;
            public StringField Description;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public Int32Field PatientGender;

            public StringField PhoneNumber;
            public StringField PatientName;

            public StringField VisitTypeName;
            public StringField VisitTypeBackgroundColor;
            public StringField VisitTypeBorderColor;

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Visits";
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
