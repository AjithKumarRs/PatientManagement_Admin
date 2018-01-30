using Abp.AspNetCore.Mvc.ViewComponents;

namespace PatientManagement.Reservation.Web.Views
{
    public abstract class ReservationViewComponent : AbpViewComponent
    {
        protected ReservationViewComponent()
        {
            LocalizationSourceName = ReservationConsts.LocalizationSourceName;
        }
    }
}