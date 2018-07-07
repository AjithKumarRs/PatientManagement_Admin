using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Extensibility;
namespace PatientManagement.PatientManagement
{
    [NestedPermissionKeys]
    [DisplayName("Patient Management")]
    public class PatientManagementPermissionKeys
    {
        [DisplayName("Reports")]
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

        [DisplayName("Activity")]
        public class Activity
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:Activity:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Activity:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Activity:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Activity:Delete";
        }

        [DisplayName("Cabinets")]
        public class Cabinets
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:Cabinets:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Cabinets:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Cabinets:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Cabinets:Delete";
        }


        [DisplayName("Life Styles")]
        public class LifeStyles
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:LifeStyles:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:LifeStyles:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:LifeStyles:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:LifeStyles:Delete";
        }

        [DisplayName("Medical Specialties")]
        public class MedicalSpecialties
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:MedicalSpecialties:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:MedicalSpecialties:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:MedicalSpecialties:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:MedicalSpecialties:Delete";
        }

        [DisplayName("Notes")]
        public class Notes
        {
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Notes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Notes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Notes:Delete";
        }
        
        [DisplayName("Notifications")]
        public class Notifications
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:Notifications:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Notifications:Read";
            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "PatientManagement:Notifications:Insert";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(InsertPermission)]
            public const string DeletePermission = "PatientManagement:Notifications:Delete";

            [Description("Entity Type and Id columns")]
            public const string ExternalEntityColumns = "Administration:Notifications:Read";
        }

        [DisplayName("Patient Health")]
        public class PatientHealth
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:PatientHealth:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:PatientHealth:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:PatientHealth:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:PatientHealth:Delete";
        }

        [DisplayName("Patients")]
        public class Patients
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:Patients:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Patients:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Patients:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Patients:Delete";
        }

        [DisplayName("Patients File Uploads")]
        public class PatientsFileUploads
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:PatientsFileUploads:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:PatientsFileUploads:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:PatientsFileUploads:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:PatientsFileUploads:Delete";
        }

        [DisplayName("Visits")]
        public class Visits
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:Visits:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:Visits:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:Visits:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:Visits:Delete";
        }

        [DisplayName("External Access")]
        public class ExternalAccess
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:ExternalAccess:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:ExternalAccess:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:ExternalAccess:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:ExternalAccess:Delete";
        }

        [DisplayName("Visit Types")]
        public class VisitTypes
        {
            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:VisitTypes:Page";
            [Description("View")]
            public const string ReadPermission = "PatientManagement:VisitTypes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "PatientManagement:VisitTypes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "PatientManagement:VisitTypes:Delete";
        }
    }
}
