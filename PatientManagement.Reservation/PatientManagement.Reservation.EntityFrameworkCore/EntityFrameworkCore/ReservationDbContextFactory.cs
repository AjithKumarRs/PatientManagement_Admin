using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using PatientManagement.Reservation.Configuration;
using PatientManagement.Reservation.Web;

namespace PatientManagement.Reservation.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class ReservationDbContextFactory : IDesignTimeDbContextFactory<ReservationDbContext>
    {
        public ReservationDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<ReservationDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            ReservationDbContextConfigurer.Configure(builder, configuration.GetConnectionString(ReservationConsts.ConnectionStringName));

            return new ReservationDbContext(builder.Options);
        }
    }
}
