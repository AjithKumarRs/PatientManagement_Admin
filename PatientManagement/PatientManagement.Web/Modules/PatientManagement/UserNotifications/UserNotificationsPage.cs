

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "PatientManagement/UserNotifications", typeof(PatientManagement.PatientManagement.Pages.UserNotificationsController))]

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UserNotificationsRow))]
    public class UserNotificationsController : Controller
    {
        [Route("PatientManagement/UserNotifications")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/UserNotifications/UserNotificationsIndex.cshtml");
        }
    }
}