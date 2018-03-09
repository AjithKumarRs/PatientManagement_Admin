using Abp.AspNetCore.Mvc.Views;
using Abp.Runtime.Session;
using Microsoft.AspNetCore.Mvc.Razor.Internal;

namespace PatientManagement.Reservation.Web.Views
{
    public abstract class ReservationRazorPage<TModel> : AbpRazorPage<TModel>
    {
        [RazorInject]
        public IAbpSession AbpSession { get; set; }

        protected ReservationRazorPage()
        {
            LocalizationSourceName = ReservationConsts.LocalizationSourceName;
        }
    }
}
