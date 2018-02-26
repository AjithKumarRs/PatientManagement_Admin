

namespace PatientManagement.PatientManagement.Pages
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize]
    public class ReportsController : Controller
    {
        [HttpGet, Route("PatientManagement/Reports")]
        public ActionResult Index()
        {
            return View("~/Modules/PatientManagement/Reports/ReportsIndex.cshtml");
        }
    }
}
