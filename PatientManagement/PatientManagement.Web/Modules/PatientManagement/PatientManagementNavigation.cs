using Serenity.Navigation;
using Patients = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(498, "Dashboard", url: "~/", permission: "", icon: "fa-calendar-o")]
[assembly: NavigationLink(500, "Patients", typeof(Patients.PatientsController), icon: "fa-group")]
[assembly: NavigationLink(505, "Visits", typeof(Patients.VisitsController), icon: "fa-calendar")]
[assembly: NavigationLink(510, "Cabinets", typeof(Patients.CabinetsController), icon: "fa-hospital-o ")]

[assembly: NavigationMenu(514, "Reports", icon: "fa-area-chart")]
[assembly: NavigationLink(515, "Reports/Visits", typeof(Patients.ReportsVisitsController), icon: "fa-calendar")]

[assembly: NavigationLink(550, "Notifications", typeof(Patients.NotificationsController), icon: "fa-bell-o")]