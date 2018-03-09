using MVC;
using PatientManagement.Administration;
using Serenity.Navigation;
using Administration = PatientManagement.Administration.Pages;
using Membership  = PatientManagement.Membership.Pages;
using PatientManagement2 = PatientManagement.PatientManagement.Pages;

[assembly: NavigationLink(8000, "Sent Emails", typeof(Administration.SentEmailsController), icon: "fa-envelope-open-o")]


[assembly: NavigationMenu(9000, "Administration", icon: "fa-desktop")]
[assembly: NavigationLink(9000, "Administration/Profile", typeof(Membership.ProfileController), icon: "fa-user-md")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "fa-users")]
[assembly: NavigationLink(9000, "Administration/External Access", typeof(Administration.ExternalAccessController), icon: "fa-link")]

[assembly: NavigationMenu(9000, "System Settings", icon: "fa-tasks ")]
[assembly: NavigationLink(9000, "System Settings/Medical Specialties", typeof(PatientManagement2.MedicalSpecialtyController), icon: "fa-medkit")]
[assembly: NavigationLink(9000, "System Settings/Payment Options", typeof(Administration.PaymentOptionsController), icon: "fa-money")]
[assembly: NavigationLink(9000, "System Settings/Offers", typeof(Administration.OffersController), icon: "fa-file-text")]
[assembly: NavigationLink(9000, "System Settings/Coupons", typeof(Administration.CouponsController), icon: "fa-percent")]
[assembly: NavigationLink(9000, "System Settings/Languages", typeof(Administration.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(9000, "System Settings/Tenant", typeof(Administration.TenantController), icon: "fa-user-secret")]
[assembly: NavigationLink(9000, "System Settings/Translations", typeof(Administration.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(9000, "System Settings/Currencies", typeof(Administration.CurrenciesController), icon: "fa-eur")]


[assembly: NavigationMenu(9000, "System Settings/Billing", icon: "fa-credit-card")]
[assembly: NavigationLink(9000, "System Settings/Billing/Subscriptions", typeof(Administration.SubscriptionsController), icon: "fa-hospital-o")]
[assembly: NavigationLink(9000, "System Settings/Billing/Payments", typeof(Administration.PaymentsController), icon: "fa-credit-card")]
[assembly: NavigationLink(9000, "System Settings/Billing/Payments Details", typeof(Administration.PaymentsDetailsController), icon: "fa-pie-chart")]
[assembly: NavigationLink(9000, "System Settings/About", typeof(Administration.AboutController), icon: "fa-question")]
//[assembly: NavigationLink(9000, "System Settings/Sergen", typeof(Administration.SergenController), icon: "icon-magic-wand")]
