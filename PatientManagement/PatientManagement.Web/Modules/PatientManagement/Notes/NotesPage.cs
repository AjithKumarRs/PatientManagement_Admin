
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.NotesRow))]
    public class NotesController : Controller
    {
        [Route("PatientManagement/Notes")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Notes/NotesIndex.cshtml");
        }
    }
}