namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VisitTypesRow))]
    public class VisitTypesController : Controller
    {
        [Route("PatientManagement/VisitTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/VisitTypes/VisitTypesIndex.cshtml");
        }
    }
}