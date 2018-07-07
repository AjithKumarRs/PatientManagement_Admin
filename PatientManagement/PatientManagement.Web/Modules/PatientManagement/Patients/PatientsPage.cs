
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.Patients.PagePermission)]
    public class PatientsController : Controller
    {
        [HttpGet, Route("PatientManagement/Patients")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Patients.PatientsIndex);
        }
    }
}