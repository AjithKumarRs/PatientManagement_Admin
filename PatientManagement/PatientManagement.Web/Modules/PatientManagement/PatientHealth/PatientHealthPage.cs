
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PatientHealthRow))]
    public class PatientHealthController : Controller
    {
        [Route("PatientManagement/PatientHealth")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/PatientHealth/PatientHealthIndex.cshtml");
        }
    }
}