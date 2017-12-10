using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using PatientManagement.Reservation.Configuration;

namespace PatientManagement.Reservation.Web.Host.Startup
{
    [DependsOn(
       typeof(ReservationWebCoreModule))]
    public class ReservationWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public ReservationWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ReservationWebHostModule).GetAssembly());
        }
    }
}
