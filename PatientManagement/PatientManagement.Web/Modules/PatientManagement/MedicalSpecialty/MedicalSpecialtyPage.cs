
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize("Administration:MedicalSpecialties:Page")]
    public class MedicalSpecialtyController : Controller
    {
        [Route("PatientManagement/MedicalSpecialty")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/MedicalSpecialty/MedicalSpecialtyIndex.cshtml");
        }
    }
}