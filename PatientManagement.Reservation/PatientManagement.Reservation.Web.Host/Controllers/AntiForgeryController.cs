using Microsoft.AspNetCore.Antiforgery;
using PatientManagement.Reservation.Controllers;

namespace PatientManagement.Reservation.Web.Host.Controllers
{
    public class AntiForgeryController : ReservationControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
