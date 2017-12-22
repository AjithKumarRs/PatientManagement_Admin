using Abp.Application.Navigation;
using Abp.Localization;
using PatientManagement.Reservation.Authorization;

namespace PatientManagement.Reservation.Web.Startup
{
    /// <summary>
    /// This class defines menus for the application.
    /// </summary>
    public class ReservationNavigationProvider : NavigationProvider
    {
        public override void SetNavigation(INavigationProviderContext context)
        {
            context.Manager.MainMenu
                .AddItem(new MenuItemDefinition(PageNames.Home, L("HomePage"), url: "", icon: ""))
                .AddItem(new MenuItemDefinition(PageNames.Doctors, L("DoctorsPage"), url: "Doctors"))
                .AddItem(new MenuItemDefinition(PageNames.Cabinets, L("CabinetsPage"), url: "Cabinets"))
                .AddItem(new MenuItemDefinition(PageNames.Clinics, L("ClinicsPage"), url: "Clinics"))
                .AddItem(new MenuItemDefinition("Settings", L("SettingsPage"))
                    .AddItem(new MenuItemDefinition("Profile", L("ProfilePage")))
                    .AddItem(new MenuItemDefinition("Reservations", L("ReservationPage")))
                )
                .AddItem(new MenuItemDefinition("System", L("SystemPage"))
                    .AddItem( new MenuItemDefinition(PageNames.Tenants, L("Tenants"), url: "Tenants", icon: "", requiredPermissionName: PermissionNames.Pages_Tenants))
                    .AddItem(new MenuItemDefinition(PageNames.Users, L("Users"), url: "Users", icon: "", requiredPermissionName: PermissionNames.Pages_Users))
                    .AddItem(new MenuItemDefinition(PageNames.Roles, L("Roles"), url: "Roles", icon: "", requiredPermissionName: PermissionNames.Pages_Roles))
                ) 
                .AddItem(new MenuItemDefinition(PageNames.About, L("About"), url: "About", icon: ""))
                ;
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, ReservationConsts.LocalizationSourceName);
        }
    }
}
