using System.Threading.Tasks;
using Abp.Configuration.Startup;
using PatientManagement.Reservation.Sessions;
using Microsoft.AspNetCore.Mvc;

namespace PatientManagement.Reservation.Web.Views.Shared.Components.FooterSmallBar
{
    public class FooterSmallBarViewComponent : ReservationViewComponent
    {
        private readonly ISessionAppService _sessionAppService;
        private readonly IMultiTenancyConfig _multiTenancyConfig;

        public FooterSmallBarViewComponent(ISessionAppService sessionAppService,
            IMultiTenancyConfig multiTenancyConfig)
        {
            _sessionAppService = sessionAppService;
            _multiTenancyConfig = multiTenancyConfig;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View();
        }
    }
}
