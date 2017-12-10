using System.Threading.Tasks;
using Abp.Application.Services;
using PatientManagement.Reservation.Authorization.Accounts.Dto;

namespace PatientManagement.Reservation.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
