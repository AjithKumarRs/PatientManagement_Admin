namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.VisitTypes.PagePermission)]
    public class VisitTypesController : Controller
    {
        [Route("PatientManagement/VisitTypes")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.VisitTypes.VisitTypesIndex);
        }
    }
}