
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.Cabinets.PagePermission)]
    public class CabinetsController : Controller
    {
        [Route("PatientManagement/Cabinets")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Cabinets.CabinetsIndex);
        }
    }
}