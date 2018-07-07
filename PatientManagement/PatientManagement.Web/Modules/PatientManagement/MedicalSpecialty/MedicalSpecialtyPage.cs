
namespace PatientManagement.PatientManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PatientManagementPermissionKeys.MedicalSpecialties.PagePermission)]
    public class MedicalSpecialtyController : Controller
    {
        [Route("PatientManagement/MedicalSpecialty")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.MedicalSpecialty.MedicalSpecialtyIndex);
        }
    }
}