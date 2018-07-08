using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration;
using Serenity.Extensibility;

namespace PatientManagement
{
    [NestedPermissionKeys]
    [DisplayName("Clinic Reports")]
    public partial class ReportsPermissionKeys
    {
        [Description("General")]
        public const string General = "Reports:General";

        [DisplayName("Visits Reports")]
        public class Reports
        {
            [Description("Page")]
            public const string ReportsPage = "Reports:Visits:Page";
            [Description("Visit Types Per Gender Chart")]
            public const string ReportsVisitTypesPerGenderChart = "Reports:Visits:VisitTypesPerGenderChart";
            [Description("New Patients This Month Box")]
            public const string ReportsNewPatientsThisMonth = "Reports:Visits:NewPatientsThisMonthBox";
            [Description("New Visits This Month Box")]
            public const string ReportsNewVisitsThisMonth = "Reports:Visits:NewVisitsThisMonthBox";
            [Description("Visits Per Month Line Chart")]
            public const string ReportsVisitsPerMonthLinearChart = "Reports:Visits:VisitsPerMonthLineChart";
        }
    }
}
