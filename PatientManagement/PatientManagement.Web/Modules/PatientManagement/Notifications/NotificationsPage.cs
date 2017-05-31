

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.NotificationsRow))]
    public class NotificationsController : Controller
    {
        [Route("PatientManagement/Notifications")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Notifications/NotificationsIndex.cshtml");
        }
    }
}