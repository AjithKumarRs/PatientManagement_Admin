namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.Visits.PagePermission)]
    public class VisitsController : Controller
    {
        [Route("PatientManagement/Visits")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Visits.VisitsIndex);
        }
    }
}