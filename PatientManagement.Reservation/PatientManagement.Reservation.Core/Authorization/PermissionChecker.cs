using Abp.Authorization;
using PatientManagement.Reservation.Authorization.Roles;
using PatientManagement.Reservation.Authorization.Users;

namespace PatientManagement.Reservation.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
