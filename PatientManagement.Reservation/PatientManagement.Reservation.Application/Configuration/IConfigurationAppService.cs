using System.Threading.Tasks;
using PatientManagement.Reservation.Configuration.Dto;

namespace PatientManagement.Reservation.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
