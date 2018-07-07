namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LifeStylesRow))]
    public class LifeStylesController : Controller
    {
        [Route(PatientManagementPermissionKeys.LifeStyles.PagePermission)]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.LifeStyles.LifeStylesIndex);
        }
    }
}