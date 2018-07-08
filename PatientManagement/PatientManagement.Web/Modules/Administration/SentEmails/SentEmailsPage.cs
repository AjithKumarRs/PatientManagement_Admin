
using PatientManagement.PatientManagement;

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.SentEmails.PagePermission)]
    public class SentEmailsController : Controller
    {
        [Route("Administration/SentEmails")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.SentEmails.SentEmailsIndex);
        }
    }
}