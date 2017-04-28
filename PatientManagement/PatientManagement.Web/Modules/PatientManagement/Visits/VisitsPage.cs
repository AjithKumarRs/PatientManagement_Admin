namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VisitsRow))]
    public class VisitsController : Controller
    {
        [Route("PatientManagement/Visits")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Visits/VisitsIndex.cshtml");
        }
    }
}