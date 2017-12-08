

namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    
    public class AboutController : Controller
    {
        [Route("Administration/About")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.About.AboutIndex);
        }
    }
}