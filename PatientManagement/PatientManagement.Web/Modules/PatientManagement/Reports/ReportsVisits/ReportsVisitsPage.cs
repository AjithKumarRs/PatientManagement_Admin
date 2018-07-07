

using PatientManagement.Administration;

namespace PatientManagement.PatientManagement.Pages
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(PatientManagementPermissionKeys.Reports.ReportsPage)]
    public class ReportsVisitsController : Controller
    {
        [HttpGet, Route("PatientManagement/Reports/Visits")]
        public ActionResult Index()
        {
            return View(MVC.Views.PatientManagement.Reports.ReportsVisits.ReportsVisitsIndex);
        }
    }
}
