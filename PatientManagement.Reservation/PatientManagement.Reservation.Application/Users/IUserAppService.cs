using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PatientManagement.Reservation.Roles.Dto;
using PatientManagement.Reservation.Users.Dto;

namespace PatientManagement.Reservation.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
