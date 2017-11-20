using MVC;
using PatientManagement.Administration;
using Serenity.Navigation;
using Administration = PatientManagement.Administration.Pages;
using Membership  = PatientManagement.Membership.Pages;
using PatientManagement2 = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(8000, "Sent Emails", typeof(Administration.SentEmailsController), icon: "fa-envelope-open-o")]

[assembly: NavigationMenu(8000, "Billing", icon: "fa-credit-card")]
[assembly: NavigationLink(8000, "Billing/Subscriptions", typeof(Administration.SubscriptionsController), icon: "fa-hospital-o")]
[assembly: NavigationLink(8000, "Billing/Payments", typeof(Administration.PaymentsController), icon: "fa-credit-card")]
[assembly: NavigationLink(8000, "Billing/Payments Details", typeof(Administration.PaymentsDetailsController), icon: "fa-pie-chart")]

[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9000, "Administration/Profile", typeof(Membership.ProfileController), icon: "fa-user-md")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]
[assembly: NavigationLink(9000, "Administration/External Access", typeof(Administration.ExternalAccessController), icon: "fa-link")]

[assembly: NavigationMenu(9000, "System Settings", icon: "fa-tasks ")]
[assembly: NavigationLink(9000, "System Settings/Medical Specialties", typeof(PatientManagement2.MedicalSpecialtyController), icon: "fa-medkit")]
[assembly: NavigationLink(9000, "System Settings/Payment Options", typeof(Administration.PaymentOptionsController), icon: "fa-money")]
[assembly: NavigationLink(9000, "System Settings/Offers", typeof(Administration.OffersController), icon: "fa-file-text")]
[assembly: NavigationLink(9000, "System Settings/Coupons", typeof(Administration.CouponsController), icon: "fa-percent")]
[assembly: NavigationLink(9000, "System Settings/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(9000, "System Settings/Tenant", typeof(Administration.TenantController), icon: "fa-user-secret")]
[assembly: NavigationLink(9000, "System Settings/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(9000, "System Settings/Currencies", typeof(Administration.CurrenciesController), icon: "fa-eur")]
//[assembly: NavigationLink(9000, "System Settings/Sergen", typeof(Administration.SergenController), icon: "icon-magic-wand")]
