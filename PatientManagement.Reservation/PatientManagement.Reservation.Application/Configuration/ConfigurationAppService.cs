using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using PatientManagement.Reservation.Configuration.Dto;

namespace PatientManagement.Reservation.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : ReservationAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
