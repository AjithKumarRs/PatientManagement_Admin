

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentsRow))]
    public class PaymentsController : Controller
    {
        [Route("Administration/Payments")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Payments/PaymentsIndex.cshtml");
        }
    }
}