using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(498, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationLink(500, "Patients", typeof(Patients.PatientsController), icon: "fa-group")]
//[assembly: NavigationMenu(499, "Patient Management", icon: "fa-group")]
//[assembly: NavigationLink(501, "Patient Management/Life Style", typeof(Patients.LifeStylesController))]
//[assembly: NavigationLink(502, "Patient Management/Patient Health", typeof(Patients.PatientHealthController))]
//[assembly: NavigationLink(503, "Patient Management/File Uploads", typeof(Patients.PatientsFileUploadsController))]

[assembly: NavigationLink(505, "Visits", typeof(Patients.VisitsController), icon: "fa-calendar")]

//TODO Visible to all users or just admins?!
[assembly: NavigationLink(506, "Notifications", typeof(Patients.NotificationsController), icon: "fa-bell-o")]

//[assembly: NavigationMenu(504, "Visits Management", icon: "fa-calendar")]
//[assembly: NavigationLink(505, "Visits Management/Visits", typeof(Patients.VisitsController))]
//[assembly: NavigationLink(506, "Visits Management/Visit Types", typeof(Patients.VisitTypesController))]