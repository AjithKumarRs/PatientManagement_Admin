using System.Collections.Generic;
using PatientManagement.Reservation.Roles.Dto;

namespace PatientManagement.Reservation.Web.Models.Roles
{
    public class RoleListViewModel
    {
        public IReadOnlyList<RoleDto> Roles { get; set; }

        public IReadOnlyList<PermissionDto> Permissions { get; set; }
    }
}
