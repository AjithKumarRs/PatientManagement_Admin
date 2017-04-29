using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(498, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationMenu(499, "Patient Management", icon: "fa-cogs")]
[assembly: NavigationLink(500, "Patient Management/Patients", typeof(Patients.PatientsController))]
[assembly: NavigationLink(501, "Patient Management/Life Style", typeof(Patients.LifeStylesController))]
[assembly: NavigationLink(502, "Patient Management/Patient Health", typeof(Patients.PatientHealthController))]

[assembly: NavigationMenu(503, "Visits Management", icon: "fa-cogs")]
[assembly: NavigationLink(504, "Visits Management/Visits", typeof(Patients.VisitsController))]
[assembly: NavigationLink(505, "Visits Management/Visit Types", typeof(Patients.VisitTypesController))]