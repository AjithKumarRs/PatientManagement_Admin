namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.Activity.PagePermission)]
    public class ActivityController : Controller
    {
        [Route("PatientManagement/Activity")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Activity.ActivityIndex);
        }
    }
}