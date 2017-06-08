
namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OffersRow))]
    public class OffersController : Controller
    {
        [Route("Administration/Offers")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Offers/OffersIndex.cshtml");
        }
    }
}