using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationMenu(8000, "PatientManagement", icon: "fa-cogs")]
[assembly: NavigationLink(500, "PatientManagement/Patients", typeof(Patients.PatientsController))]
[assembly: NavigationLink(500, "PatientManagement/Visits", typeof(Patients.VisitsController))]
[assembly: NavigationLink(500, "PatientManagement/Visits Info", typeof(Patients.VisitsInfoController))]
[assembly: NavigationLink(500, "PatientManagement/Visit Types", typeof(Patients.VisitTypesController))]
[assembly: NavigationLink(500, "PatientManagement/Life Style", typeof(Patients.LifeStylesController))]
[assembly: NavigationLink(500, "PatientManagement/Patient Health", typeof(Patients.PatientHealthController))]