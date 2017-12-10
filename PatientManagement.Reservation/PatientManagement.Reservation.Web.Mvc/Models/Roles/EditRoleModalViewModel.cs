using System.Collections.Generic;
using System.Linq;
using PatientManagement.Reservation.Roles.Dto;

namespace PatientManagement.Reservation.Web.Models.Roles
{
    public class EditRoleModalViewModel
    {
        public RoleDto Role { get; set; }

        public IReadOnlyList<PermissionDto> Permissions { get; set; }

        public bool HasPermission(PermissionDto permission)
        {
            return Permissions != null && Role.Permissions.Any(p => p == permission.Name);
        }
    }
}
