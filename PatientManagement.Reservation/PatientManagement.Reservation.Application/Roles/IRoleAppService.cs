using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PatientManagement.Reservation.Roles.Dto;

namespace PatientManagement.Reservation.Roles
{
    public interface IRoleAppService : IAsyncCrudAppService<RoleDto, int, PagedResultRequestDto, CreateRoleDto, RoleDto>
    {
        Task<ListResultDto<PermissionDto>> GetAllPermissions();
    }
}
