
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CabinetsRow))]
    public class CabinetsController : Controller
    {
        [Route("PatientManagement/Cabinets")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Cabinets.CabinetsIndex);
        }
    }
}