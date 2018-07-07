
namespace PatientManagement.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    //[PageAuthorize(typeof(Entities.UserRow))]
    [PageAuthorize(PermissionKeys.User.PagePermission)]
    public class UserController : Controller
    {
        [Route("Administration/User")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.User.UserIndex);
        }
    }
}