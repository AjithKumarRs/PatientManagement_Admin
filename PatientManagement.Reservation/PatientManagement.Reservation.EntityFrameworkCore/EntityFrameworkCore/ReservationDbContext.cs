using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using PatientManagement.Reservation.Authorization.Roles;
using PatientManagement.Reservation.Authorization.Users;
using PatientManagement.Reservation.MultiTenancy;

namespace PatientManagement.Reservation.EntityFrameworkCore
{
    public class ReservationDbContext : AbpZeroDbContext<Tenant, Role, User, ReservationDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public ReservationDbContext(DbContextOptions<ReservationDbContext> options)
            : base(options)
        {
        }
    }
}
