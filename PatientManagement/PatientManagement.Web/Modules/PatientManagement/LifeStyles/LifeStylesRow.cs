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

    [ConnectionKey("PatientManagement"), TableName("[dbo].[LifeStyles]"), DisplayName("Life Styles"), InstanceName("Life Style"), TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.LifeStyles.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.LifeStyles.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.LifeStyles.DeletePermission)]
    [LookupScript("PatientManagement.LifeStyles",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class LifeStylesRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Life Style Id"), Identity]
        public Int32? LifeStyleId
        {
            get { return Fields.LifeStyleId[this]; }
            set { Fields.LifeStyleId[this] = value; }
        }

        [DisplayName("Patient"), ForeignKey("[dbo].[Patients]", "PatientId"), LeftJoin("jPatient"), TextualField("PatientName")]
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
        [DisplayName("Bad Habits"), Size(2000)]
        [TextAreaEditor(Rows = 6)]
        public String BadHabits
        {
            get { return Fields.BadHabits[this]; }
            set { Fields.BadHabits[this] = value; }
        }
        [DisplayName("Daily Meals"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String DailyMeals
        {
            get { return Fields.DailyMeals[this]; }
            set { Fields.DailyMeals[this] = value; }
        }

        [DisplayName("Remarks For Food Take"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String RemarksForFoodTake
        {
            get { return Fields.RemarksForFoodTake[this]; }
            set { Fields.RemarksForFoodTake[this] = value; }
        }

        // TODO: Still exist in migrations 
        //[DisplayName("Favorite Food"), Size(500)]
        //[TextAreaEditor(Rows = 6)]
        //public String FavoriteFood
        //{
        //    get { return Fields.FavoriteFood[this]; }
        //    set { Fields.FavoriteFood[this] = value; }
        //}
        [DisplayName("Not Eating"), Size(500)]
        [TextAreaEditor(Rows = 6)]
        public String NotEating
        {
            get { return Fields.NotEating[this]; }
            set { Fields.NotEating[this] = value; }
        }
        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get { return Fields.PatientName[this]; }
            set { Fields.PatientName[this] = value; }
        }
        

        IIdField IIdRow.IdField
        {
            get { return Fields.LifeStyleId; }
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

        public class RowFields : LoggingRowFields
        {
            public Int32Field LifeStyleId;
            public Int32Field PatientId;
            
            public StringField Regime;
            public StringField DailyMeals;
            public StringField RemarksForFoodTake;
            public StringField BadHabits;
            //public StringField FavoriteFood;
            public StringField NotEating;

            public StringField PatientName;
            
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.LifeStyles";
            }
        }
    }
}
