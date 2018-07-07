
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
    using System.Collections.Generic;
    [ConnectionKey("PatientManagement"), TableName("[dbo].[Cabinets]"), DisplayName("Cabinets"), InstanceName("Cabinet") ,TwoLevelCached]
    [ReadPermission(PatientManagementPermissionKeys.Cabinets.ReadPermission)]
    [UpdatePermission(PatientManagementPermissionKeys.Cabinets.UpdatePermission)]
    [DeletePermission(PatientManagementPermissionKeys.Cabinets.DeletePermission)]
    [LookupScript("PatientManagement.Cabinets",
        LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class CabinetsRow : LoggingRow, IIdRow, INameRow
    {
        [DisplayName("Cabinet Id"), Identity]
        public Int32? CabinetId
        {
            get { return Fields.CabinetId[this]; }
            set { Fields.CabinetId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }


        [DisplayName("Description"), Size(-1),  QuickSearch]
        [HtmlContentEditor(Rows = 10)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }


        [DisplayName("City"), Size(500),  QuickSearch]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        //[DisplayName("Country"), Size(500),  QuickSearch]
        //public String Country
        //{
        //    get { return Fields.Country[this]; }
        //    set { Fields.Country[this] = value; }
        //}

        [DisplayName("Phone Number"),  QuickSearch]
        public Int32? PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CabinetId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }
        [DisplayName("Work Hours Start")]
        [TimeEditor]
        public Int16? WorkHoursStart
        {
            get { return Fields.WorkHoursStart[this]; }
            set { Fields.WorkHoursStart[this] = value; }
        }
        
        [DisplayName("Work Days")]
        [LookupEditor(typeof(CabinetWorkDaysRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CabinetWorkDaysRow), "CabinetId", "WeekDayId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> WorkDays
        {
            get { return Fields.WorkDays[this]; }
            set { Fields.WorkDays[this] = value; }
        }

        [DisplayName("Work Hours End")]
        [TimeEditor]
        public Int16? WorkHoursEnd
        {
            get { return Fields.WorkHoursEnd[this]; }
            set { Fields.WorkHoursEnd[this] = value; }
        }

        [DisplayName("Representatives")]
        [LookupEditor(typeof(UserRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CabinetRepresentativesRow), "CabinetId", "UserId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter]
        public List<Int32> Representatives
        {
            get { return Fields.Representatives[this]; }
            set { Fields.Representatives[this] = value; }
        }

        [NotMapped, DisplayName("User Specialties")]
        public List<String> UserSpecialties
        {
            get { return Fields.UserSpecialties[this]; }
            set { Fields.UserSpecialties[this] = value; }
        }
        
        public static readonly RowFields Fields = new RowFields().Init();

        public CabinetsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CabinetId;
            public ListField<Int32> WorkDays;

            public StringField Name;
            public StringField Description;
            public StringField City;
          //  public StringField Country;
            public ListField<Int32> Representatives;
            public ListField<String> UserSpecialties;
            public Int16Field WorkHoursStart;
            public Int16Field WorkHoursEnd;
            public Int32Field PhoneNumber;
            
            

            public RowFields()
                : base()
            {
                LocalTextPrefix = "PatientManagement.Cabinets";
            }
        }
    }
}
