using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationMenu(8000, "Patient Management", icon: "fa-cogs")]
[assembly: NavigationLink(500, "Patient Management/Patients", typeof(Patients.PatientsController))]
[assembly: NavigationLink(500, "Patient Management/Visits", typeof(Patients.VisitsController))]
[assembly: NavigationLink(500, "Patient Management/Visits Info", typeof(Patients.VisitsInfoController))]
[assembly: NavigationLink(500, "Patient Management/Visit Types", typeof(Patients.VisitTypesController))]
[assembly: NavigationLink(500, "Patient Management/Life Style", typeof(Patients.LifeStylesController))]
[assembly: NavigationLink(500, "Patient Management/Patient Health", typeof(Patients.PatientHealthController))]