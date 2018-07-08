using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using PatientManagement.Administration;
using Serenity.Extensibility;
namespace PatientManagement.PatientManagement
{
   
    [NestedPermissionKeys]
    [DisplayName("Clinic Management")]
    public class PatientManagementPermissionKeys
    {
        [Description("General")]
        public const string General = "PatientManagement:General"; 

    

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
            [Description("Page"), ImplicitPermission(AdministrationTenantsPermissionKeys.MedicalSpecialties.ReadPermission)]
            public const string PagePermission = "Administration:MedicalSpecialties:Page";
            [Description("Update"), ImplicitPermission(AdministrationTenantsPermissionKeys.MedicalSpecialties.ReadPermission)]
            public const string UpdatePermission = "Administration:MedicalSpecialties:Update";
            [Description("Delete"), ImplicitPermission(AdministrationTenantsPermissionKeys.MedicalSpecialties.ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:MedicalSpecialties:Delete";
        }

        [DisplayName("Sent Emails")]
        public class SentEmails
        {
            [Description("View")]
            public const string ReadPermission = "PatientManagement:SentEmails:Read";

            [Description("Page"), ImplicitPermission(ReadPermission)]
            public const string PagePermission = "PatientManagement:SentEmails:Page";

            [Description("Insert"), ImplicitPermission(ReadPermission)]
            public const string InsertPermission = "PatientManagement:SentEmails:Insert";
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
