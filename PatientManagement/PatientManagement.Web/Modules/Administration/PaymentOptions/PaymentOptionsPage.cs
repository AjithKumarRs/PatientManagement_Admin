
namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;


    [PageAuthorize(PermissionKeys.PaymentOptions.PagePermission)]
    public class PaymentOptionsController : Controller
    {
        [Route("Administration/PaymentOptions")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.PaymentOptions.PaymentOptionsIndex);
        }
    }
}