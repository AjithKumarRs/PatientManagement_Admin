namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VisitsInfoRow))]
    public class VisitsInfoController : Controller
    {
        [Route("PatientManagement/VisitsInfo")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/VisitsInfo/VisitsInfoIndex.cshtml");
        }
    }
}