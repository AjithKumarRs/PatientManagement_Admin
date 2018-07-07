using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Extensibility;
namespace PatientManagement.PatientManagement
{
    [NestedPermissionKeys]
    [DisplayName("PatientManagement")]
    public class PatientManagementPermissionKeys
    {
        public const string ReportsPage = "Reports:Visits:Page";
        public const string ReportsVisitTypesPerGenderChart = "Reports:Visits:VisitTypesPerGenderChart";
        public const string ReportsNewPatientsThisMonth = "Reports:Visits:NewPatientsThisMonthBox";
        public const string ReportsNewVisitsThisMonth = "Reports:Visits:NewVisitsThisMonthBox";
        public const string ReportsVisitsPerMonthLinearChart = "Reports:Visits:VisitsPerMonthLineChart";

        public class Activity
        {
            [Description("Page")]
            public const string PagePermission = "PatientManagement:Activity:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Activity:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Activity:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Activity:Delete";
        }

        public class Cabinets
        {
            [Description("Page")]
            public const string PagePermission = "PatientManagement:Cabinets:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Cabinets:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Cabinets:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Cabinets:Delete";
        }


        public class LifeStyles
        {
            [Description("Page")]
            public const string PagePermission = "PatientManagement:LifeStyles:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:LifeStyles:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:LifeStyles:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:LifeStyles:Delete";
        }

        public class MedicalSpecialties
        {
            [Description("Page")]
            public const string PagePermission = "PatientManagement:MedicalSpecialties:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:MedicalSpecialties:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:MedicalSpecialties:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:MedicalSpecialties:Delete";
        }
    }
}
