using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serenity.ComponentModel;

namespace PatientManagement.PatientManagement.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("PatientManagement"), DisplayName("CabinetRepresentatives"), InstanceName("CabinetRepresentatives")]
    [ReadPermission("PatientManagement:Cabinets:Read")]
    [ModifyPermission("PatientManagement:Cabinets:Modify")]
    [LookupScript("PatientManagement.CabinetWorkDays")]
    public class CabinetWorkDaysRow : Row, IIdRow
    {
        [DisplayName("Work Day Id"), Column("WorkDayId"), Identity]
        public Int32? WorkDayId
        {
            get { return Fields.WorkDayId[this]; }
            set { Fields.WorkDayId[this] = value; }
        }

        [DisplayName("Week Day Id"), Column("WeekDayId"), NotNull]
        [LookupInclude]
        public WeekDays? WeekDayId
        {
            get { return (WeekDays?)Fields.WeekDayId[this]; }
            set { Fields.WeekDayId[this] = (Int32?)value; }
        }

        [DisplayName("Cabinet Id"), Column("CabinetID"), NotNull]
        public Int32? CabinetId
        {
            get { return Fields.CabinetId[this]; }
            set { Fields.CabinetId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WorkDayId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CabinetWorkDaysRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WorkDayId;
            public Int32Field WeekDayId;
            public Int32Field CabinetId;

            public RowFields()
                : base("CabinetWorkDays")
            {
                LocalTextPrefix = "CabinetWorkDays";
            }
        }
    }
}
