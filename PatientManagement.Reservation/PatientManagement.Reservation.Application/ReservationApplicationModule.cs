using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using PatientManagement.Reservation.Authorization;

namespace PatientManagement.Reservation
{
    [DependsOn(
        typeof(ReservationCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class ReservationApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<ReservationAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(ReservationApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
