using Abp.MultiTenancy;
using PatientManagement.Reservation.Authorization.Users;

namespace PatientManagement.Reservation.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
