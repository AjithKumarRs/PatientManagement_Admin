

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Administration:Coupons:Page")]
    public class CouponsController : Controller
    {
        [Route("Administration/Coupons")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Coupons.CouponsIndex);
        }
    }
}