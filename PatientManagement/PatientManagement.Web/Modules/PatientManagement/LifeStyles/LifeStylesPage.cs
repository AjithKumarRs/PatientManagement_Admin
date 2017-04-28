

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "PatientManagement/LifeStyles", typeof(PatientManagement.PatientManagement.Pages.LifeStylesController))]

namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LifeStylesRow))]
    public class LifeStylesController : Controller
    {
        [Route("PatientManagement/LifeStyles")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/LifeStyles/LifeStylesIndex.cshtml");
        }
    }
}