
namespace PatientManagement.PatientManagement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PatientManagement"), TableName("[dbo].[VisitsInfo]"), DisplayName("Visits Info"), InstanceName("Visits Info"), TwoLevelCached]
    [ReadPermission("PatientManagement:VisitsInfo:Read")]
    [ModifyPermission("PatientManagement:VisitsInfo:Modify")]
    public sealed class VisitsInfoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Visit Info Id"), Identity]
        public Int32? VisitInfoId
        {
            get { return Fields.VisitInfoId[this]; }
            set { Fields.VisitInfoId[this] = value; }
        }

        [DisplayName("Visit"), NotNull, ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit")]
        public Int32? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Remarks"), Size(1000), QuickSearch]
        public String Remarks
        {
            get { return Fields.Remarks[this]; }
            set { Fields.Remarks[this] = value; }
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

        [DisplayName("Visit Patient Id"), Expression("jVisit.[PatientId]")]
        public Int32? VisitPatientId
        {
            get { return Fields.VisitPatientId[this]; }
            set { Fields.VisitPatientId[this] = value; }
        }

        [DisplayName("Visit Visit Info Id"), Expression("jVisit.[VisitInfoId]")]
        public Int32? VisitVisitInfoId
        {
            get { return Fields.VisitVisitInfoId[this]; }
            set { Fields.VisitVisitInfoId[this] = value; }
        }

        [DisplayName("Visit Visit Type Id"), Expression("jVisit.[VisitTypeId]")]
        public Int32? VisitVisitTypeId
        {
            get { return Fields.VisitVisitTypeId[this]; }
            set { Fields.VisitVisitTypeId[this] = value; }
        }

        [DisplayName("Visit Date"), Expression("jVisit.[Date]")]
        public DateTime? VisitDate
        {
            get { return Fields.VisitDate[this]; }
            set { Fields.VisitDate[this] = value; }
        }

        [DisplayName("Visit Insert User Id"), Expression("jVisit.[InsertUserId]")]
        public Int32? VisitInsertUserId
        {
            get { return Fields.VisitInsertUserId[this]; }
            set { Fields.VisitInsertUserId[this] = value; }
        }

        [DisplayName("Visit Insert Date"), Expression("jVisit.[InsertDate]")]
        public DateTime? VisitInsertDate
        {
            get { return Fields.VisitInsertDate[this]; }
            set { Fields.VisitInsertDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VisitInfoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Remarks; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VisitsInfoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VisitInfoId;
            public Int32Field VisitId;
            public StringField Remarks;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public Int32Field VisitPatientId;
            public Int32Field VisitVisitInfoId;
            public Int32Field VisitVisitTypeId;
            public DateTimeField VisitDate;
            public Int32Field VisitInsertUserId;
            public DateTimeField VisitInsertDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.VisitsInfo";
            }
        }
    }
}
