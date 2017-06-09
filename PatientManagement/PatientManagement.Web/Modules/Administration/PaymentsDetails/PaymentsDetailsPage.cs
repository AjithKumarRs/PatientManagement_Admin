
namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentsDetailsRow))]
    public class PaymentsDetailsController : Controller
    {
        [Route("Administration/PaymentsDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/PaymentsDetails/PaymentsDetailsIndex.cshtml");
        }
    }
}