
namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;


    [PageAuthorize("Administration:PaymentOptions:Page")]
    public class PaymentOptionsController : Controller
    {
        [Route("Administration/PaymentOptions")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/PaymentOptions/PaymentOptionsIndex.cshtml");
        }
    }
}