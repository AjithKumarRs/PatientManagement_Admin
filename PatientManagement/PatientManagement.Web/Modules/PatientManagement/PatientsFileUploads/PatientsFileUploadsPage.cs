

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.PatientsFileUploads.PagePermission)]
    public class PatientsFileUploadsController : Controller
    {
        [Route("PatientManagement/PatientsFileUploads")]
        public ActionResult Index()
        {
           
            return View(MVC.Views.PatientManagement.PatientsFileUploads.PatientsFileUploadsIndex);
        }
    }
}