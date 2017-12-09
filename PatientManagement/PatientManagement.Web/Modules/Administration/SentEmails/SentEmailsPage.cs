
namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SentEmailsRow))]
    public class SentEmailsController : Controller
    {
        [Route("Administration/SentEmails")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.SentEmails.SentEmailsIndex);
        }
    }
}