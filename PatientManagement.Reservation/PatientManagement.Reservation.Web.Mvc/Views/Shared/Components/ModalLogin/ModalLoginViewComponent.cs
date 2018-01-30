using System.Linq;
using System.Threading.Tasks;
using Abp.Configuration;
using Abp.Configuration.Startup;
using Microsoft.AspNetCore.Http.Extensions;
using PatientManagement.Reservation.Configuration;
using PatientManagement.Reservation.Configuration.Ui;
using Microsoft.AspNetCore.Mvc;
using PatientManagement.Reservation.Web.Models.Account;

namespace PatientManagement.Reservation.Web.Views.Shared.Components.ModalLogin
{
    public class ModalLoginViewComponent : ReservationViewComponent
    {
        private readonly ISettingManager _settingManager;
        private readonly IMultiTenancyConfig _multiTenancyConfig;

        public ModalLoginViewComponent(ISettingManager settingManager,
            IMultiTenancyConfig multiTenancyConfig
            )
        {
            _multiTenancyConfig = multiTenancyConfig;
            _settingManager = settingManager;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            //TODO this is not implemented because we dont know the return URL
            string returnUrl = Request.GetEncodedUrl();
            if (string.IsNullOrWhiteSpace(returnUrl))
            {
                returnUrl = GetAppHomeUrl();
            }

            return View(new LoginFormViewModel
            {
                ReturnUrl = returnUrl,
                IsMultiTenancyEnabled = _multiTenancyConfig.IsEnabled,
                IsSelfRegistrationAllowed = IsSelfRegistrationEnabled(),
                MultiTenancySide = AbpSession.MultiTenancySide
            });
        }


        public string GetAppHomeUrl()
        {
            return Url.Action("Index", "Home");
        }

        private bool IsSelfRegistrationEnabled()
        {
            if (!AbpSession.TenantId.HasValue)
            {
                return false; //No registration enabled for host users!
            }

            return true;
        }

    }
}
