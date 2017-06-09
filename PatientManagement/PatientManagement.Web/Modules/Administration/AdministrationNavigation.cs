using PatientManagement.Administration;
using Serenity.Navigation;
using Administration = PatientManagement.Administration.Pages;

[assembly: NavigationMenu(8000, "Billing", icon: "fa-credit-card")]
[assembly: NavigationLink(8000, "Billing/Subscriptions", typeof(Administration.SubscriptionsController))]
[assembly: NavigationLink(8000, "Billing/Payments", typeof(Administration.PaymentsController))]
[assembly: NavigationLink(8000, "Billing/Payments Details", typeof(Administration.PaymentsDetailsController))]


[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9000, "Administration/Payment Options", typeof(Administration.PaymentOptionsController), icon: "fa-money")]
[assembly: NavigationLink(9000, "Administration/Offers", typeof(Administration.OffersController), icon: "fa-file-text")]
[assembly: NavigationLink(9000, "Administration/Currencies", typeof(Administration.CurrenciesController), icon: "fa-eur")]
[assembly: NavigationLink(9000, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9000, "Administration/Tenant", typeof(Administration.TenantController), icon: "fa-user-secret")]
[assembly: NavigationLink(9000, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]
[assembly: NavigationLink(9000, "Administration/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(9000, "Administration/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(9000, "Administration/Sergen", typeof(Administration.SergenController), icon: "icon-magic-wand")]