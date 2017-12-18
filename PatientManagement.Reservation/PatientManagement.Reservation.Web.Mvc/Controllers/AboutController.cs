using Abp.AspNetCore.Mvc.Authorization;
using PatientManagement.Reservation.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace PatientManagement.Reservation.Web.Controllers
{
  //  [AbpMvcAuthorize]
    public class AboutController : ReservationControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}