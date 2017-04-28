
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PatientsRow))]
    public class PatientsController : Controller
    {
        [HttpGet, Route("PatientManagement/Patients")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Patients/PatientsIndex.cshtml");
        }
    }
}