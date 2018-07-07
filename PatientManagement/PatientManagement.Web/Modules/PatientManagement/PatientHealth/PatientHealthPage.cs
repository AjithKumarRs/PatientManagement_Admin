
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.PatientHealth.PagePermission)]
    public class PatientHealthController : Controller
    {
        [Route("PatientManagement/PatientHealth")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.PatientHealth.PatientHealthIndex);
        }
    }
}