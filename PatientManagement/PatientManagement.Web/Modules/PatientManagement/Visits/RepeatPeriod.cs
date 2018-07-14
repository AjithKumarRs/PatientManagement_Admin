using System.ComponentModel;

namespace PatientManagement.PatientManagement.Entities
{
    public enum RepeatPeriod
    {
        [Description("Day")]
        Day = 1,

        [Description("Week")]
        Week = 2,

        [Description("Month")]
        Month = 3,

        [Description("Year")]
        Year = 4
    }
}

