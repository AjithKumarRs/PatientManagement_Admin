


namespace PatientManagement.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Currencies.PagePermission)]

    public class CurrenciesController : Controller
    {
        [Route("Administration/Currencies")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Currencies.CurrenciesIndex);
        }
    }
}