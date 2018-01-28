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
    public sealed class LifeStylesRow : Row, IIdRow, INameRow, ILoggingRow, IMultiTenantRow, IIsActiveRow
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

        #region ILoggingRow

        [DisplayName("Insert User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }


        [DisplayName("Created by"), Expression("usrI.UserName")]
        public String InsertUserName
        {
            get { return Fields.InsertUserName[this]; }
            set { Fields.InsertUserName[this] = value; }
        }


        [DisplayName("Insert Date"), NotNull, SortOrder(1, true)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id"), NotNull, ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        [ReadPermission("Administration:Tenants")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }
        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String UpdateUserName
        {
            get { return Fields.UpdateUserName[this]; }
            set { Fields.UpdateUserName[this] = value; }
        }

        [DisplayName("Update Date Field"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public DateTime? UpdateDateField
        {
            get { return Fields.UpdateDateField[this]; }
            set { Fields.UpdateDateField[this] = value; }
        }
        public IIdField InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField => Fields.InsertDate;


        public IIdField UpdateUserIdField { get; } = Fields.UpdateUserId;

        DateTimeField IUpdateLogRow.UpdateDateField { get; } = Fields.UpdateDateField;

        #endregion

        #region Tenant

        [Insertable(false), Updatable(false), ForeignKey("Tenants", "TenantId"), LeftJoin("tnt")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        [DisplayName("Tenant"), Expression("tnt.TenantName")]
        [ReadPermission("Administration:Tenants")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }
        #endregion

        #region IIsActive

        [DisplayName("Is Active"), NotNull]
        [ReadPermission("Administration:Tenants")]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }


        #endregion

        public static readonly RowFields Fields = new RowFields().Init();

        public LifeStylesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LifeStyleId;
            public Int32Field PatientId;
            
            public StringField Regime;
            public StringField DailyMeals;
            public StringField RemarksForFoodTake;
            public StringField BadHabits;
            //public StringField FavoriteFood;
            public StringField NotEating;

            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDateField;
            public Int16Field IsActive;


            public StringField TenantName;
            public StringField InsertUserName;
            public StringField UpdateUserName;

            public StringField PatientName;

            public readonly Int32Field TenantId;
            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.LifeStyles";
            }
        }
    }
}
