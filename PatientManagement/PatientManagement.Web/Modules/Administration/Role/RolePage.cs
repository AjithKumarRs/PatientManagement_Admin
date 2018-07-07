namespace PatientManagement.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Roles.PagePermission)]
    public class RoleController : Controller
    {
        [Route("Administration/Role")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}