using Abp.Modules;
using Abp.Reflection.Extensions;
using PatientManagement.Reservation.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace PatientManagement.Reservation.Web.Startup
{
    [DependsOn(typeof(ReservationWebCoreModule))]
    public class ReservationWebMvcModule : AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public ReservationWebMvcModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void PreInitialize()
        {
            Configuration.Navigation.Providers.Add<ReservationNavigationProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ReservationWebMvcModule).GetAssembly());
        }
    }
}