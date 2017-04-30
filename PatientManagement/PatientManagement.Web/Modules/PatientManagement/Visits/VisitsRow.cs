
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

    public sealed class VisitsRow : Row, IIdRow, IInsertLogRow
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

        [DisplayName("Start Date"), NotNull, QuickSearch, QuickFilter, SortOrder(1, true)]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]
        public DateTime? StartDate
        {
            get => Fields.StartDate[this];
            set => Fields.StartDate[this] = value;
        }

        [DisplayName("End Date"), NotNull, QuickSearch]
        [DateTimeKind(DateTimeKind.Utc), DateTimeEditor]
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
        [DisplayName("Description"), Width(200)]
        [TextAreaEditor(Rows = 8)]
        public String Description
        {
            get => Fields.Description[this];
            set => Fields.Description[this] = value;
        }

        #region PatientFields
        [DisplayName("Patient Name"), Expression("jPatient.[Name]"), Width(150), QuickFilter, EditLink]
        public String PatientName
        {
            get => Fields.PatientName[this];
            set => Fields.PatientName[this] = value;
        }

        [DisplayName("Patient Personal Number"), Expression("jPatient.[PersonalNumber]")]
        public Int32? PatientPersonalNumber
        {
            get => Fields.PatientPersonalNumber[this];
            set => Fields.PatientPersonalNumber[this] = value;
        }

        [DisplayName("Patient Phone Number"), Expression("jPatient.[PhoneNumber]")]
        public Int32? PatientPhoneNumber
        {
            get => Fields.PatientPhoneNumber[this];
            set => Fields.PatientPhoneNumber[this] = value;
        }

        [DisplayName("Patient First Registration Date"), Expression("jPatient.[FirstRegistrationDate]")]
        public DateTime? PatientFirstRegistrationDate
        {
            get => Fields.PatientFirstRegistrationDate[this];
            set => Fields.PatientFirstRegistrationDate[this] = value;
        }

        [DisplayName("Patient Address"), Expression("jPatient.[Address]")]
        public String PatientAddress
        {
            get => Fields.PatientAddress[this];
            set => Fields.PatientAddress[this] = value;
        }

        [DisplayName("Patient Height"), Expression("jPatient.[Height]")]
        public Int32? PatientHeight
        {
            get => Fields.PatientHeight[this];
            set => Fields.PatientHeight[this] = value;
        }

        [DisplayName("Patient Weight"), Expression("jPatient.[Weight]")]
        public Int32? PatientWeight
        {
            get => Fields.PatientWeight[this];
            set => Fields.PatientWeight[this] = value;
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

            public StringField PatientName;
            public Int32Field PatientPersonalNumber;
            public Int32Field PatientPhoneNumber;
            public DateTimeField PatientFirstRegistrationDate;
            public StringField PatientAddress;
            public Int32Field PatientHeight;
            public Int32Field PatientWeight;

            public StringField VisitTypeName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Visits";
            }
        }

        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;
    }
}
