namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ActivityRow))]
    public class ActivityController : Controller
    {
        [Route("PatientManagement/Activity")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Activity/ActivityIndex.cshtml");
        }
    }
}