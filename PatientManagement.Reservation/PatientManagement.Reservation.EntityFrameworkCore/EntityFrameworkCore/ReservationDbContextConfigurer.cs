using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace PatientManagement.Reservation.EntityFrameworkCore
{
    public static class ReservationDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<ReservationDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<ReservationDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
