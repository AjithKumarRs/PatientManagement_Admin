using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PatientManagement.Reservation.MultiTenancy.Dto;

namespace PatientManagement.Reservation.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
