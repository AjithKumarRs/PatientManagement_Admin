using Abp.Application.Navigation;

namespace PatientManagement.Reservation.Web.Views.Shared.Components.MainTopBarNav
{
    public class MainTopBarNavViewModel
    {
        public UserMenu MainMenu { get; set; }

        public string ActiveMenuItemName { get; set; }
    }
}
