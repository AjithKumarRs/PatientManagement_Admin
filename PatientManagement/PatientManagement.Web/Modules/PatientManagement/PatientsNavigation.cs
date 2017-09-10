using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(498, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]
[assembly: NavigationLink(500, "Patients", typeof(Patients.PatientsController), icon: "fa-group")]
[assembly: NavigationLink(505, "Visits", typeof(Patients.VisitsController), icon: "fa-calendar")]
[assembly: NavigationLink(506, "Notifications", typeof(Patients.NotificationsController), icon: "fa-bell-o")]