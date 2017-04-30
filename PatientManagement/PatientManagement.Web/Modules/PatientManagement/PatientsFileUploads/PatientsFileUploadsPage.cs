

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PatientsFileUploadsRow))]
    public class PatientsFileUploadsController : Controller
    {
        [Route("PatientManagement/PatientsFileUploads")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/PatientsFileUploads/PatientsFileUploadsIndex.cshtml");
        }
    }
}