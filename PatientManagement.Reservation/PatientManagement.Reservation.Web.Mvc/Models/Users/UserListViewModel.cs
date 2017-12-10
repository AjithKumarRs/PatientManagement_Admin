using System.Collections.Generic;
using PatientManagement.Reservation.Roles.Dto;
using PatientManagement.Reservation.Users.Dto;

namespace PatientManagement.Reservation.Web.Models.Users
{
    public class UserListViewModel
    {
        public IReadOnlyList<UserDto> Users { get; set; }

        public IReadOnlyList<RoleDto> Roles { get; set; }
    }
}