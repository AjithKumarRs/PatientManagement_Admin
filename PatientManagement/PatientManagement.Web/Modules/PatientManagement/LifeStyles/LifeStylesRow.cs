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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[LifeStyles]"), DisplayName("Life Styles"), InstanceName("Life Style"), TwoLevelCached]
    [ReadPermission("PatientManagement:LifeStyles:Read")]
    [ModifyPermission("PatientManagement:LifeStyles:Modify")]
    [LookupScript("PatientManagement.LifeStyles",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class LifeStylesRow : Row, IIdRow, INameRow, IInsertLogRow, IMultiTenantRow
    {
        [Category("General")]

        [DisplayName("Patient"), PrimaryKey, ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName"), Required(true)]
        [LookupEditor(typeof(PatientsRow), InplaceAdd = true)]

        public Int32? PatientId
        {
            get { return Fields.PatientId[this]; }
            set { Fields.PatientId[this] = value; }
        }
        
        [DisplayName("Regime"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String Regime
        {
            get { return Fields.Regime[this]; }
            set { Fields.Regime[this] = value; }
        }

        [DisplayName("Daily Meals"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String DailyMeals
        {
            get { return Fields.DailyMeals[this]; }
            set { Fields.DailyMeals[this] = value; }
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
            get { return Fields.Regime; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LifeStylesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PatientId;
            
            public StringField Regime;
            public StringField DailyMeals;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;

            public StringField PatientName;

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.LifeStyles";
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
