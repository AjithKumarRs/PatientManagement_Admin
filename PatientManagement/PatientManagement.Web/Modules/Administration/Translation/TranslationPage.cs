
namespace PatientManagement.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Administration:Translation:Read")]
    public class TranslationController : Controller
    {
        [Route("Administration/Translation")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Translation.TranslationIndex);
        }
    }
}