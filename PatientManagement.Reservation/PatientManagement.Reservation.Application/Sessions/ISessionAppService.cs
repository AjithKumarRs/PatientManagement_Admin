using System.Threading.Tasks;
using Abp.Application.Services;
using PatientManagement.Reservation.Sessions.Dto;

namespace PatientManagement.Reservation.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
